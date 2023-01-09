import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import VoteInput, { VoteInputProps } from "components/voteInput/VoteInput";
import { EntityWebDTO, PledgeWebDTO } from "api-client/api-client";
import {
  pledgeCategoryEnumToString,
  pledgeStatusEnumToString,
} from "utils/pledge";
import NextLink from "next/link";
import { FaThermometer, FaClock } from "react-icons/fa";

type InheritedProps = Pick<VoteInputProps, "onVote">;

export type PledgeCardProps = {
  pledge: PledgeWebDTO;
  entity: EntityWebDTO;
  author: any;
  showCategory?: boolean;
  userUrl?: (username?: string) => string;
  entityUrl?: (id?: string) => string;
  pledgeUrl?: (id?: string) => string;
  tagUrl?: (tag?: string) => string;
} & InheritedProps;

const lowOpacityText = 0.3;

const bottomTextProps = {
  fontSize: "xs",
  lineHeight: "short",
  textAlign: "end",
  as: "span",
} as const;

const PledgeCard: React.FC<PledgeCardProps> = ({
  pledge,
  entity,
  author,
  onVote,
  showCategory = true,
  userUrl,
  entityUrl,
  pledgeUrl,
  tagUrl,
}) => {
  return (
    <Box
      p="4"
      pb="3"
      maxW="320px"
      borderWidth="1px"
      borderRadius="md"
      bgColor="gray.100"
    >
      <Flex align="flex-start">
        <Link
          as={NextLink}
          href={entityUrl?.(entity?.id) ?? ""}
          variant="h2"
          fontWeight="bold"
          noOfLines={1}
        >
          {entity?.name}
        </Link>
        {showCategory && (
          <>
            <Text mx="1" opacity={lowOpacityText} color="purple">
              |
            </Text>
            <Link textTransform="lowercase" noOfLines={1}>
              {pledgeCategoryEnumToString(pledge?.category)}
            </Link>
          </>
        )}
        <VoteInput
          voteScore={pledge?.voteScore}
          voted={pledge?.voted}
          onVote={onVote}
          mt="-0.5rem"
          me="-0.5rem"
          ms="auto"
        />
      </Flex>
      <Text
        fontSize="xl"
        fontWeight="semibold"
        lineHeight="short"
        textAlign="justify"
        noOfLines={3}
      >
        {pledge?.name}
      </Text>
      <HStack my={2} spacing={1}>
        <Tag colorScheme="purple">
          <TagLeftIcon boxSize="12px" as={FaClock} />
          <TagLabel>{pledge?.deliverBy?.format?.("ll")}</TagLabel>
        </Tag>
        <Tag colorScheme="purple">
          <TagLeftIcon boxSize="12px" as={FaThermometer} />
          <TagLabel>{pledgeStatusEnumToString(pledge?.status)}</TagLabel>
        </Tag>
      </HStack>
      {(pledge?.tags?.length ?? 0) > 0 && (
        <Text noOfLines={1} textAlign="end">
          {pledge?.tags?.map((tag) => (
            <Link
              {...bottomTextProps}
              as={NextLink}
              href={tagUrl?.(tag) ?? ""}
              ms={1}
              key={tag}
            >
              #{tag}
            </Link>
          ))}
        </Text>
      )}
      <Flex justifyContent="end" wrap="wrap">
        <Text {...bottomTextProps}>{pledge?.createdOn?.format?.("LL")}</Text>
        <Text mx="1" opacity={lowOpacityText} {...bottomTextProps}>
          |
        </Text>
        <Link
          {...bottomTextProps}
          as={NextLink}
          href={userUrl?.(author?.username) ?? ""}
          textTransform="lowercase"
        >
          @{author?.username}
        </Link>
      </Flex>
      <ButtonGroup
        variant="outline"
        size="sm"
        colorScheme="purple"
        justifyContent="flex-end"
        width="100%"
        mt={2}
      >
        <Button as={NextLink} href={pledgeUrl?.(pledge?.id) ?? ""}>
          Open
        </Button>
        <Button>Subscribe</Button>
      </ButtonGroup>
    </Box>
  );
};

export default PledgeCard;
