import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { game1, game2, game3 } from "@/constant/enums/data-fake";

const HomePage = () => {
  return (
    <div style={{ height: "100%", margin: "0px 0", marginBottom: "20px" }}>
      <Heading className="my-[30px]">Game gà</Heading>
      {/* List game Ga */}
      <SimpleGrid
        spacing={4}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      >
        {game1.map((game) => (
          <Card
            direction={{ base: "column", sm: "column" }}
            overflow="hidden"
            variant="outline"
          >
            <div className="label_game">
              <Tag size={"lg"} key={"lg"} variant="solid" colorScheme="teal">
                {game.nameGame}
              </Tag>
            </div>
            <video
              style={{ width: "100%", height: "auto" }}
              src={game.linkLive}
              alt="Video content"
              loop
              autoPlay
              muted
            />
            <CardBody>
              <div className="percent_lenh">
                <span className="title_percent_lenh">Đặt cược: </span>
                <span className="value_percent_lenh">
                  <Input variant="outline" placeholder="Nhập giá trị cược" />
                </span>
              </div>
              <div className="line_horizon"></div>
              <div className="dat_lenh_game1">
                <div className="dat_lenh_game1_left">
                  <RadioGroup defaultValue="2">
                    <Stack spacing={5} direction="row">
                      <Radio colorScheme="red" value="1">
                        <span style={{ color: "red" }}>Đỏ</span>
                      </Radio>
                      <Radio colorScheme="green" value="2">
                        <span style={{ color: "green" }}>Xanh</span>
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </div>
                <div className="dat_lenh_game1_right">
                  <Button>Đặt</Button>
                </div>
              </div>
              <div className="line_horizon"></div>
            </CardBody>
            <CardFooter>Kết quả: {game.resultGame}</CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <Heading className="my-[30px]">Game bầu cua</Heading>
      {/* List game bau cua */}
      <SimpleGrid
        spacing={4}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        className="mt-5"
      >
        {game2.map((game) => (
          <Card
            direction={{ base: "column", sm: "column" }}
            overflow="hidden"
            variant="outline"
          >
            <div className="label_game">
              <Tag size={"lg"} key={"lg"} variant="solid" colorScheme="teal">
                {game.nameGame}
              </Tag>
            </div>
            <video
              style={{ width: "100%", height: "auto" }}
              src={game.linkLive}
              alt="Video content"
              loop
              autoPlay
              muted
            />
            <CardBody>
              <div className="select_image_game2">
                <div class="list_select_image_game2">
                  <div class="item_select_image_game2">
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%" }}
                      src="https://rgb.vn/wp-content/uploads/2016/02/bau-cua-tom-ca-02.gif"
                      alt="Caffe Latte"
                    />
                  </div>
                  <div class="item_select_image_game2">
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%" }}
                      src="https://rgb.vn/wp-content/uploads/2016/02/bau-cua-tom-ca-02.gif"
                      alt="Caffe Latte"
                    />
                  </div>
                  <div class="item_select_image_game2">
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%" }}
                      src="https://rgb.vn/wp-content/uploads/2016/02/bau-cua-tom-ca-02.gif"
                      alt="Caffe Latte"
                    />
                  </div>
                  <div class="item_select_image_game2">
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%" }}
                      src="https://rgb.vn/wp-content/uploads/2016/02/bau-cua-tom-ca-02.gif"
                      alt="Caffe Latte"
                    />
                  </div>
                  <div class="item_select_image_game2">
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%" }}
                      src="https://rgb.vn/wp-content/uploads/2016/02/bau-cua-tom-ca-02.gif"
                      alt="Caffe Latte"
                    />
                  </div>
                  <div class="item_select_image_game2">
                    <Image
                      objectFit="cover"
                      maxW={{ base: "100%" }}
                      src="https://rgb.vn/wp-content/uploads/2016/02/bau-cua-tom-ca-02.gif"
                      alt="Caffe Latte"
                    />
                  </div>
                </div>
              </div>
              <div className="line_horizon"></div>
              <div className="dat_lenh_game2">
                <div className="dat_lenh_game2_left">
                  <Input variant="outline" placeholder="Nhập giá trị cược" />
                </div>
                <div className="line_vertical"></div>

                <div className="dat_lenh_game2_right">
                  <Button>Đặt</Button>
                </div>
              </div>
              <div className="line_horizon"></div>
            </CardBody>
            <CardFooter>Kết quả: {game.resultGame}</CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <Heading className="my-[30px]">Game tài xỉu</Heading>
      {/* List game tai xiu */}
      <SimpleGrid
        spacing={4}
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        className="mt-5"
      >
        {game3.map((game) => (
          <Card
            direction={{ base: "column", sm: "column" }}
            overflow="hidden"
            variant="outline"
          >
            <div className="label_game">
              <Tag size={"lg"} key={"lg"} variant="solid" colorScheme="teal">
                {game.nameGame}
              </Tag>
            </div>
            <video
              style={{ width: "100%", height: "auto" }}
              src={game.linkLive}
              alt="Video content"
              loop
              autoPlay
              muted
            />
            <CardBody>
              <div className="dat_lenh_game2">
                <div className="dat_lenh_game2_left">
                  <Button style={{ background: "#ff3300" }}>Tài</Button>
                </div>
                <div className="line_vertical"></div>

                <div className="dat_lenh_game2_right">
                  <Button style={{ background: "#269900" }}>Xỉu</Button>
                </div>
              </div>
              <div className="line_horizon"></div>
              <div className="select_image_game2">
                <div class="list_select_image_game2">
                  <div class="item_select_image_game2">
                    <Button colorScheme="blue">Bao 1</Button>
                  </div>
                  <div class="item_select_image_game2">
                    <Button colorScheme="blue">Bao 2</Button>
                  </div>
                  <div class="item_select_image_game2">
                    <Button colorScheme="blue">Bao 3</Button>
                  </div>
                  <div class="item_select_image_game2">
                    <Button colorScheme="blue">Bao 4</Button>
                  </div>
                  <div class="item_select_image_game2">
                    <Button colorScheme="blue">Bao 5</Button>
                  </div>
                  <div class="item_select_image_game2">
                    <Button colorScheme="blue">Bao 6</Button>
                  </div>
                </div>
              </div>

              <div className="line_horizon"></div>
              <div className="dat_lenh_game2">
                <div className="dat_lenh_game2_left">
                  <Input variant="outline" placeholder="Nhập giá trị cược" />
                </div>
                <div className="line_vertical"></div>

                <div className="dat_lenh_game2_right">
                  <Button>Đặt</Button>
                </div>
              </div>
              <div className="line_horizon"></div>
            </CardBody>
            <CardFooter>Kết quả: {game.resultGame}</CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default HomePage;
