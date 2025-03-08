import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const UIContainer = () => {
  return (
    <Flex height="100vh" width="100vw" direction="column">
      <Header />
      <Flex flex="1">
        <Sidebar />
        <Flex flex="1" p="0px 24px 26px 16px">
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UIContainer;
