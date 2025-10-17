(function() {
  const url = new URL(window.location.href);

  function reloadWithParam(param, value) {
    if (url.searchParams.get(param) !== value) {
      url.searchParams.set(param, value);
      console.log(`Redirecting to force safe param: ${param}=${value}`);
      window.location.replace(url.toString());
    }
  }

  // Google
  if (url.hostname === "www.google.com") {
    reloadWithParam("safe", "active");
  }

  // Bing
  if (url.hostname === "www.bing.com" && url.pathname.startsWith("/search")) {
    reloadWithParam("safeSearch", "strict");
  }

  // YouTube
  if (url.hostname === "www.youtube.com" && url.pathname === "/results") {
    reloadWithParam("safeSearch", "1");
  }

  // DuckDuckGo (strict SafeSearch)
  if (url.hostname === "duckduckgo.com") {
    reloadWithParam("kp", "1");
  }

  // Yahoo multiple subdomains
  const yahooHosts = [
    "search.yahoo.com",
    "search.yahoo.co.uk",
    "ca.search.yahoo.com",
    "images.search.yahoo.com",
    "ca.images.search.yahoo.com"
  ];

  if (yahooHosts.includes(url.hostname)) {
    reloadWithParam("vm", "r");
  }

  // Brave Search: redirect to safe.search.brave.com domain
  if (url.hostname === "search.brave.com") {
    // If not already on safe domain, redirect
    if (url.hostname !== "safe.search.brave.com") {
      url.hostname = "safe.search.brave.com";
      console.log("Redirecting to Brave SafeSearch domain");
      window.location.replace(url.toString());
    }
  }
})();
