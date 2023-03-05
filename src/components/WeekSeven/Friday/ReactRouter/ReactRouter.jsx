import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ReactRouter = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <Container>
        <Typography variant="h4" component={"h4"}>
          React Router - Routing through your Contents
        </Typography>
        <Typography variant="p" component={"p"} mt={2} mb={2}>
          React Router is a collection of navigational components that compose
          declaratively with your application. Whether you want to have
          bookmarkable URLs for your web app or a composable way to navigate in
          React Native, React Router works wherever React is rendering--so take
          your pick!
        </Typography>
        <Typography variant="h6" component={"h6"}>
          Browser Router
        </Typography>
        <Typography variant="p" component={"p"} mt={1} mb={2}>
          The <code>BrowserRouter</code> should be used when you have a server
          that will handle dynamic requests (knows how to respond to any
          possible URI), and you want the URL to look like real URLs. In short,
          when you have a backend that will handle requests and you want to use
          the HTML5 history API (pushState, replaceState and the popstate event)
          to keep your UI in sync with the URL. If you are building a static
          website with no server, consider using the <code>HashRouter</code>{" "}
          instead.
        </Typography>
        <Typography variant="h6" component={"h6"}>
          Router Link
        </Typography>
        <Typography variant="p" component={"p"} mt={1} mb={2}>
          Link is a declarative, accessible component for linking to other pages
          in your application. It is important to note that the Link component
          does not render an anchor tag. Instead, it renders a special React
          Router link that knows how to navigate around your application without
          making a server request. This means that the page will not reload when
          you click the link. Instead, the Link component will update the URL in
          the browser’s address bar, and the Router will figure out which page
          or component to show based on the new URL. This is called “client-side
          routing”. It’s fast, and it keeps your application UI in sync with the
          URL.
        </Typography>
        <Typography variant="h6" component={"h6"}>
          useParams
        </Typography>
        <Typography variant="p" component={"p"} mt={1} mb={2}>
          The useParams hook is a hook that allows you to easily access the URL
          parameters from the current route. URL parameters are key-value pairs
          that are part of a URL. They can be used to dynamically change the
          content of the page. For example, in the URL
          https://example.com/products/123, the product ID is a URL parameter.
          The value of the product ID parameter is 123. You can access this
          value inside your application by using the useParams hook. The
          useParams hook returns an object of key/value pairs of URL parameters.
          Each key corresponds to the name of the parameter and each value
          corresponds to the current value of the parameter. For example, if the
          current URL is /products/123, then the value of useParams() would be `
          <code>productId: "123"</code>`. You can use this object to access the
          value of the product ID parameter.
        </Typography>
        <Typography variant="h6" component={"h6"}>
          useNavigate
        </Typography>
        <Typography variant="p" component={"p"} mt={1} mb={2}>
          The useNavigate hook is a hook that allows you to easily navigate to a
          new URL. The useNavigate hook returns a function that can be used to
          navigate to a new URL. The navigate function takes a string that
          represents the URL to navigate to. For example, if you want to
          navigate to the URL /products/123, you can use the navigate function
          like this:{" "}
          <code>
            const navigate = useNavigate(); navigate("/products/123");
          </code>
          .
        </Typography>
        <Typography variant="h6" component={"h6"}>
          useLocation
        </Typography>
        <Typography variant="p" component={"p"} mt={1} mb={2}>
          The useLocation hook is a hook that allows you to easily access the
          URL location object. The location object represents the current URL.
          It contains information about the current URL, such as the pathname,
          search parameters, and hash. You can use the useLocation hook to
          access this information. The useLocation hook returns a location
          object. This object has the following properties: pathname, search,
          hash, state, and key. The pathname property contains the path of the
          URL. The search property contains the search parameters of the URL.
          The hash property contains the hash of the URL. The state property
          contains the state object that was passed to the navigate function.
          The key property contains a unique key that is created every time the
          location changes. For example, if the current URL is
          /products/123?color=red#description, then the value of useLocation()
          would be `{" "}
          <code>
            pathname: "/products/123", search: "?color=red", hash:
            "#description", state: null, key: "h3r9qo"
          </code>
          `. You can use this object to access the value of the product ID
          parameter. You can use this object to access the value of the product
          ID parameter.
        </Typography>
      </Container>
    </Box>
  );
};

export default ReactRouter;
