---
sidebar_label: "Quick Start - Node.js"
sidebar_position: 3
hide_title: true
---

# Node Quick Start

In this guide we will get you up and running using API Hero in a few minutes.

### 1. Install the API Hero js package

Install the `@apihero/js` package using your preferred package manager.

<Tabs groupId="install-package">
  
  <TabItem value="npm" label="npm">

```sh
npm i @apihero/js
```

  </TabItem>

  <TabItem value="pnpm" label="pnpm">

```sh
pnpm i @apihero/js
```

  </TabItem>

  <TabItem value="yarn" label="yarn">

```zsh
yarn i @apihero/js
```

  </TabItem>

</Tabs>

### 2. Check your tsconfig.json configuration (if you're using TypeScript)

Ensure that your `moduleResolution` is set to `nodenext`:

```json title="tsconfig.json"
{
  "compilerOptions": {
    //... other options
    "moduleResolution": "nodenext"
    //... other options
  }
  //... other
}
```

### 3. Configure the worker

The final step is to configure and start the service worker. You can place this code anywhere that is executed when your application starts.

```ts
async function initProxy() {
  const { setupProxy } = await import("@apihero/js/node");
  const proxy = setupProxy({
    // your project key can be found on your project page
    projectKey: "INSERT_YOUR_PROJECT_KEY",
    // you only need to specify the url if you want to self-host API Hero
    //it defaults to the hosted proxy:
    //url: "https://proxy.apihero.run",
    env: process.env.NODE_ENV,
    // optionally specify patterns that get proxied, it defaults to all
    //allow: ["https://api.github.com/*"],
    // optionally stop certain requests by using deny
    //deny: ["https://disallowdomain.com/*"],
  });

  await proxy.start();
}

initProxy();
```

If you don't specify an `allow` list, all requests will be proxied. You can use `deny` to block specific requests, or use `allow` to opt-in to certain domains. You can use them combined to allow some request patterns and deny others.

:::tip

Although it may seem unsafe, it is okay to put the `projectKey` in your code. The `projectKey` is a unique identifier for your project, and is used to authenticate with the API Hero API. It is not a secret, think of it more as a username.

:::

### 4. Run your web app to start monitoring API traffic

Login to your [API Hero](https://app.apihero.run) account. It should look something like this:
![Your project before you have logs](/img/onboarding-no-logs.png)

After you have run your web app and your first logs come through the page will automatically update to the following:
![Your project with logs](/img/onboarding-has-logs.png)

You can select any of the log entries to view the full request and response information.
