import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  id: string;
  title?: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  dismissible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly notifications$ = new BehaviorSubject<Notification[]>([]);
  private readonly defaultDuration = 5000;

  public getNotifications(): Observable<Notification[]> {
    return this.notifications$.asObservable();
  }

  public success(title: string, message?: string, duration: number = this.defaultDuration): void {
    this.addNotification(title, message, 'success', duration);
  }

  public error(title: string, message?: string, duration: number = this.defaultDuration): void {
    this.addNotification(title, message, 'error', duration);
  }

  public warning(title: string, message?: string, duration: number = this.defaultDuration): void {
    this.addNotification(title, message, 'warning', duration);
  }

  public info(title: string, message?: string, duration: number = this.defaultDuration): void {
    this.addNotification(title, message, 'info', duration);
  }

  public dismissNotification(id: string): void {
    const notifications = this.notifications$.getValue();
    const filtered = notifications.filter(n => n.id !== id);
    this.notifications$.next(filtered);
  }

  public clearAll(): void {
    this.notifications$.next([]);
  }

  private addNotification(
    title: string,
    message: string | undefined,
    type: Notification['type'],
    duration?: number
  ): void {
    const id = `${Date.now()}-${Math.random()}`;
    const notification: Notification = {
      id,
      title,
      message: message || title,
      type,
      duration,
      dismissible: true
    };

    const notifications = this.notifications$.getValue();
    this.notifications$.next([...notifications, notification]);

    if (duration && duration > 0) {
      setTimeout(() => {
        this.dismissNotification(id);
      }, duration);
    }
  }
}
