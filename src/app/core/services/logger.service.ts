import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: Date;
  level: LogLevel;
  message: string;
  data?: unknown;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private readonly logs: LogEntry[] = [];
  private readonly maxLogs = 100;
  private readonly logLevel: LogLevel = environment.logLevel as LogLevel;

  public debug(message: string, data?: unknown): void {
    this.log('debug', message, data);
  }

  public info(message: string, data?: unknown): void {
    this.log('info', message, data);
  }

  public warn(message: string, data?: unknown): void {
    this.log('warn', message, data);
  }

  public error(message: string, data?: unknown): void {
    this.log('error', message, data);
  }

  public getLogs(): LogEntry[] {
    return [...this.logs];
  }

  public clearLogs(): void {
    this.logs.length = 0;
  }

  private log(level: LogLevel, message: string, data?: unknown): void {
    // Check if this log level should be logged
    if (!this.shouldLog(level)) {
      return;
    }

    const entry: LogEntry = {
      timestamp: new Date(),
      level,
      message,
      data
    };

    this.logs.push(entry);

    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    this.outputLog(entry);
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    const currentLevelIndex = levels.indexOf(this.logLevel);
    const messageLevelIndex = levels.indexOf(level);

    return messageLevelIndex >= currentLevelIndex;
  }

  private outputLog(entry: LogEntry): void {
    if (environment.production && entry.level === 'debug') {
      return;
    }

    const timestamp = entry.timestamp.toISOString();
    const prefix = `[${timestamp}] [${entry.level.toUpperCase()}]`;
    const message = `${prefix} ${entry.message}`;

    const consoleMethod = console[entry.level] || console.log;
    if (entry.data) {
      consoleMethod(message, entry.data);
    } else {
      consoleMethod(message);
    }
  }
}
