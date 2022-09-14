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
It's possible that you need to add authentication for the API endpoint that you're trying to use.

### 5. Adding API authentication
