# Request explorer

import { YouTubeEmbed } from "@site/src/components/YouTubeEmbed";

<YouTubeEmbed embedId="IVaNkKWBy04" width={800} />

## Useful information

![Features](/img/history/features.png)

#### 1. Status code

Quickly see which requests succeeded and failed

#### 2. Request and Response viewer

You can view the Headers, Body and Input params for every request and response.

#### 3. Input parameters

Quickly see what input parameters were used for each request. These are what you pass in from your code.

#### 4. Response time and caching

How long does the response take and was caching used?

#### 5. Rate limiting

This displays how many requests are left before you hit the rate limit. E.g. `1/60` means there is 1 more request remaining before requests start failing because you have gone over the API's limit.

"Resets at" is where the rate limit quota resets back to the full amount.

#### 6. Date range selection

You can select the time period to view the logs for.

## How to view the Request explorer

### 1. Visit your project dashboard

a) Login to [API Hero](https://app.apihero.run)
b) Navigate to the project you wish to view logs for

### 2. Select an API endpoint

On your project page there is a list of endpoints. If there aren't any yet, you should read the [introduction](/).

![Select an endpoint](/img/history/projectEndpoints.png)
