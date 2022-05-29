import { motion } from "framer-motion"
import {
  Heading,
  Container,
  Text,
  Flex,
  Link,
  Code,
  Box,
  Image,
} from "@chakra-ui/react";
export const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
  ><Text
              bgClip="text"
              fontSize={"400"}
              fontWeight="extrabold"
              bgGradient="linear(to-l, #445E88, #B1C0D8)"
            >
              X
            </Text></motion.div>
)