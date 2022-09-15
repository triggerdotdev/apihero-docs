---
sidebar_label: "Quick Start - React"
sidebar_position: 2
hide_title: true
---

# React quick start

To use API Hero in your React app, follow the steps below.

### 1. Run the API Hero CLI

Run this in your project folder

```sh
npx apihero@latest add GitHub
```

### 2. Follow the instructions

It should guide you to:

1. Login to API Hero (creating an account if you don't have one)
2. Select the API you want to use
3. Create a project in API Hero

It will also install the required packages so you can start using the API.

### 3. Setup the ApiHeroProvider

Before you can begin making API calls, you need to wrap your app in the `ApiHeroProvider` and pass in your projectKey that you should have received from the CLI.

```jsx
export default function ExportedApp() {
  return (
    <APIHeroProvider projectKey="<Your Project Key Here>">
      <App />
    </APIHeroProvider>
  );
}
```

### 3. Use the API

```ts
//used to create a React hook
import { createEndpoint } from "@apihero/react";

//the api endpoint group you want to use, in this case from the GitHub integration from API Hero.
//usually I just let VSCode import everything for me
import { repos } from "@apihero/github";

const useGetRepo = createEndpoint(repos.getRepo);

export function StarCount({ owner, repo }: { owner: string; repo: string }) {
  //use the API Hero hook you created, passing in anything it expects
  const { data, status, error } = useGetRepo({ owner, repo });

  return (
    <div>
      {status === "loading" ? (
        <p>Loading…</p>
      ) : status === "error" ? (
        <p>🫤 {error.message}.</p>
      ) : (
        <p>{data.stargazers_count} stars</p>
      )}
    </div>
  );
}
```

### 4. Run your site and view the logs in API Hero

![My API Hero logs](/img/logs.png)
You should see every API request, including ones which failed.

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

Head over to [app.apihero.run](app.apihero.run) and navigate to the project page. Click on the "Add" button in the Authentication side panel:

![API Hero Add Auth](/img/authentication/addAuth.png)

Add a Personal Access Token to your project using your GitHub username as the PAT username:

![API Hero Add PAT](/img/authentication/githubPATadd.png)

![API Hero Save PAT](/img/authentication/githubPATsave.png)

Back on the Project page, you should now see that you have 1 authentication method configured:

![Project with PAT Auth](/img/authentication/projectWithAuth.png)

Without changing your code at all, go ahead and make another request and then head back to the Request History page to confirm your raised rate limits:

![History with rate limits](/img/authentication/historyWithRateLimits.png)
