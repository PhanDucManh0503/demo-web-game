import { Spinner } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1>404 Not Found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Spinner />
      </div>
    </div>
  );
};

export default NotFoundPage;
