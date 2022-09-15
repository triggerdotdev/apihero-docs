# Caching

## Why enable caching?

Adding caching achieves a few things

1. Your app will load faster when users are doing common things
2. You are much less likely to hit rate limits (especially if you are [authenticated](/features/authentication)). If you exceed a rate limit then relevant parts of your app will stop working.

## How to enable caching

import { YouTubeEmbed } from "@site/src/components/YouTubeEmbed";

<YouTubeEmbed embedId="A7VLMZmtMwc" width={800} />

### 1. Visit your project dashboard

a) Login to [API Hero](https://app.apihero.run)
b) Navigate to the project you wish to add authentication to

### 2. Enable caching

Turn the caching switch on.
![Enable caching](/img/caching/enable.png)

### 3. Set the cache time (Time to live)

This is how long the API responses are saved and reused for the same inputs. It is also known as the [Time to live](https://en.wikipedia.org/wiki/Time_to_live).

In this example we set the cache to 1 hour:

![Set the cache time](/img/caching/setDuration.png)

### 4. Cached results in the Request History

In the [Request History](/features/request-history) cached responses have a tick in the `Cached` column.

![Cached responses in the log](/img/caching/cachedLog.png)
