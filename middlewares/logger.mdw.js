import { createLogger, transports, format } from 'winston';
import expressWinston from 'express-winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path'
const routeLogger = expressWinston.logger({
    level: function (req, res) {
        var level = "";
        if (res.statusCode >= 100) { level = "info"; }
        if (res.statusCode >= 400) { level = "warn"; }
        if (res.statusCode >= 500) { level = "error"; }
        if (res.statusCode == 401 || res.statusCode == 403) { level = "critical"; }
        return level;
      },format: format.combine(
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss', tz: 'Asia/Ho_Chi_Minh' }),
        format.label({ label: 'SAKILA API' }),
        format.json()
    ),
    transports: [
        new DailyRotateFile({
            filename: './logs/api-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
});

export { routeLogger }