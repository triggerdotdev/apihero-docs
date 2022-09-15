# Authentication

## Why add authentication?

There are a few reasons you will almost always want to use authentication with an API.

1. Some endpoints require authentication for them to work (the 401 status code indicates you haven't got valid authentication)
2. Some endpoints return more information when you are authenticated. This could mean more detailed data or access to information that only your authenticated account can access.
3. Often when authenticated you will have higher rate limits.

## How to add authentication

import { YouTubeEmbed } from "@site/src/components/YouTubeEmbed";

<YouTubeEmbed embedId="va1KDmX5JH0" width={800} />
Learn how to add authentication in this 2 minute video.

### 1. Visit your project dashboard

a) Login to [API Hero](https://app.apihero.run)
b) Navigate to the project you wish to add authentication to

### 2. Navigate to the authentication page

Select the "Add" button under Authentication for the desired API.
![API Hero Add Auth](/img/authentication/addAuth.png)

### 3. Select the authentication method you wish to add

APIs often offer several alternative methods for authentication. They have different abilities.

The official documentation for the API are using will often have a guide on authentication.

One way of selecting an authentication method is to pick one that allows you to access the endpoints you want to use.

In the right-hand column you can view the endpoints you are already using and all the endpoints. They are labelled with whether they require authentication and which methods they support.
![Endpoint authentication list](/img/authentication/endpointList.png)

### 4. Adding an authentication method

You can add authentication by simply pressing the "Add" button and filling in the required fields.

![Adding an authentication method](/img/authentication/accessTokenAdd.png)
