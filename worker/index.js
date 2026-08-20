import { Container, getContainer } from "@cloudflare/containers";

export class FlaskContainer extends Container {
  defaultPort = 8080;
  sleepAfter = "10m";
}

export default {
  async fetch(request, env) {
    const container = getContainer(env.FLASK_CONTAINER, "main");
    return container.fetch(request);
  }
};
