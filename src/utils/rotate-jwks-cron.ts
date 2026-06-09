import { cron, Patterns } from '@elysia/cron';
import { rotateJWKS } from '@/src/lib/jwks';
export const rotateJWKSCron = cron({
  name: 'jwks-rotate',
  pattern: Patterns.everyWeekOn(Patterns.MONDAY, '00:00'),
  async run() {
    await rotateJWKS();
  },
});
