import {
  Button,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { game1 } from "@/constant/enums/data-fake";

const TaoGame1Admin = () => {
  return (
    <div>
      <Heading size="md">Tạo game Gà</Heading>
      <div style={{ marginTop: " 20px" }}>
        <span>Tên game</span>
        <Input placeholder="Nhập tên game" />
      </div>
      <div style={{ marginTop: " 20px" }}>
        <span>Link live</span>
        <Input placeholder="Nhập link live" />
      </div>
      <div style={{ marginTop: " 20px" }}>
        <span>Kết quả</span>
        <Input placeholder="Nhập kết quả" />
      </div>
      <div style={{ marginTop: " 20px" }}>
        <Button>Tạo</Button>
      </div>
      <Heading style={{ marginTop: " 20px" }} size="md">
        Danh sách game Gà
      </Heading>
      <TableContainer style={{ marginTop: "30px" }}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Tên game</Th>
              <Th>Link live</Th>
              <Th>Kết quả</Th>
            </Tr>
          </Thead>
          <Tbody>
            {game1.map((game) => (
              <Tr>
                <Td>{game.nameGame}</Td>
                <Td>{game.linkLive}</Td>
                <Td>{game.resultGame}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default TaoGame1Admin;
