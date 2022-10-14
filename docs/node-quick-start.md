---
sidebar_label: "Quick Start - Node.js"
sidebar_position: 3
hide_title: true
---

# Node Quick Start

In this guide we will get you up and running using API Hero to connect to the GitHub REST API.

### 1. Run the API Hero CLI

In your terminal, navigate to the root directory of your Node.js application.

:::info

We currently only support Node.js 18+ because we make use of the new native [fetch](https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental) API

:::

Run the following command to bootstrap your Node.js project with API Hero and add your first API integration:

```zsh
npx apihero@latest add GitHub
```

This command will take you through a series of steps to get started

- Authenticating with API Hero (if you haven't already)
- Selecting an existing Workspace / Project on apihero.run or creating a new one
- Adding the GitHub API to your Project on apihero.run
- Adding the `@apihero/github` and `@apihero/node` packages to your package dependencies

When it's finished it will print out your `projectKey` (a long string of characters like `cl823alx00590eidl9qxg0h6x`). We'll need that in the following steps.

### 2. Write the code

Now you are ready to add some code to your Node.js project to call your first GitHub API. For this example we're going to be using the [Get a Repo](https://docs.github.com/en/rest/repos/repos#get-a-repository) endpoint because it can be used without authentication.

```ts
import { repos } from "@apihero/github";
import { fetchEndpoint } from "@apihero/node";

export async function getStarCount(owner: string, repo: string) {
  const response = await fetchEndpoint(
    repos.getRepo,
    {
      owner,
      repo,
    },
    { projectKey: "<your projectKey here>" }
  );

  if (response.status === "success") {
    return response.body.stargazers_count;
  } else {
    throw response.error;
  }
}
```

The `repos.getRepo` code is the way you reference which API endpoint you want to fetch, and we use it to make sure the params passed in (in this case `owner` and `repo`) are correct, and we also give you back the correct type of the response body:

![getRepo endpoint](/img/getRepo.png)

![stargazers_count](/img/stargazers_count.png)

### 3. Run the code

Now do whatever it is you need to do to call the above code. Here's a hint:

```ts
await getStarCount("apihero-run", "jsonhero-web"); // => 5000
```

### 4. Inspect the request in API Hero

Head over to [app.apihero.run](https://app.apihero.run) and inspect the request in the [Request explorer](/features/request-explorer):

![My API Hero logs](/img/nodeLogs.png)

### 5. Add Authentication

Calling public GitHub endpoints without authentication info is possible but is limited to 60 requests per hour.

:::warning

GitHub rate-limits non-authenticated requests by IP address. Based on personal experience, you can easily use up an entire large office's request quota if you aren't careful!

:::

Don't worry, API Hero makes it really easy to add authentication to your API calls, without having to change a line of code!

First, head over to [GitHub's Personal access tokens page](https://github.com/settings/tokens) and generate a new token to use with API Hero:

![GitHub PAT](/img/authentication/githubPAT.png)

Make sure to select the `repo` scope if you'd like to fetch data about private repositories. If not, leave the scopes blank.

After saving GitHub will show you the PAT string that you'll need to copy out for the next step:

![GitHub PAT copy](/img/authentication/githubPATcopy.png)

Head over to [app.apihero.run](https://app.apihero.run) and navigate to the project page. Click on the "Add" button in the Authentication side panel:

![API Hero Add Auth](/img/authentication/addAuth.png)

Add a Personal Access Token to your project using your GitHub username as the PAT username:

![API Hero Add PAT](/img/authentication/githubPATadd.png)

![API Hero Save PAT](/img/authentication/githubPATsave.png)

Back on the Project page, you should now see that you have 1 authentication method configured:

![Project with PAT Auth](/img/authentication/projectWithAuth.png)

Without changing your code at all, go ahead and make another request (like in step 3) and then head back to the Request explorer page to confirm your raised rate limits:

![History with rate limits](/img/authentication/historyWithRateLimits.png)
