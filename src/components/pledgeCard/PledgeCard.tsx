import * as React from "react";
import { Box, Flex, HStack, Link, Tag, Text } from "@chakra-ui/react";
import VoteInput, { VoteInputProps } from "components/voteInput/VoteInput";
import { EntityWebDTO, PledgeWebDTO } from "api-client/api-client";
import { pledgeCategoryEnumToString } from "utils/pledge";
import NextLink from "next/link";

type InheritedProps = Pick<VoteInputProps, "onVote">;

export type PledgeCardProps = {
  pledge: PledgeWebDTO;
  entity: EntityWebDTO;
  author: any;
  showCategory?: boolean;
  userUrl?: (username: string) => string;
} & InheritedProps;

const lowOpacityText = 0.2;

const bottomTextProps = {
  fontSize: "xs",
  lineHeight: "short",
  textAlign: "end",
} as const;

const PledgeCard: React.FC<PledgeCardProps> = ({
  pledge,
  entity,
  author,
  onVote,
  showCategory = true,
  userUrl,
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
        <Text variant="h2" fontWeight="bold" noOfLines={1}>
          {entity?.name}
        </Text>
        {showCategory && (
          <>
            <Text mx="1" opacity={lowOpacityText}>
              /
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
          mr="-0.5rem"
          ml="auto"
        />
      </Flex>
      <Text
        fontSize="xl"
        fontWeight="semibold"
        lineHeight="short"
        textAlign="justify"
      >
        {pledge?.description}
      </Text>
      {(pledge?.tags?.length ?? 0) > 0 && (
        <HStack mt={2} spacing={2}>
          {pledge?.tags?.map((tag, index) => (
            <Tag key={index} variant="solid" colorScheme="purple">
              #{tag}
            </Tag>
          ))}
        </HStack>
      )}
      <Flex justifyContent="end" mt={2}>
        <Text {...bottomTextProps}>{pledge?.createdOn?.format?.("LL")}</Text>
        <Text mx="2" opacity={lowOpacityText} {...bottomTextProps}>
          by
        </Text>
        <Link
          as={NextLink}
          href={userUrl?.(author?.username) ?? ""}
          {...bottomTextProps}
        >
          {author?.username}
        </Link>
      </Flex>
    </Box>
  );
};

export default PledgeCard;
