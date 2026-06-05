import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotenv from "dotenv"

dotenv.config()

// The code below will limit 100 requests per 60 seconds.

const rateLimit = new RateLimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s")
});

export default rateLimit