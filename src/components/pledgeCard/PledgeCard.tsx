import * as React from "react";
import { EntityWebDTO, PledgeWebDTO } from "api-client/apiSchemas";
import { Box, Flex, Text } from "@chakra-ui/react";
import VoteInput, { VoteInputProps } from "components/voteInput/VoteInput";

type InheritedProps = Pick<VoteInputProps, "onVote">;

export type PledgeCardProps = {
  pledge: PledgeWebDTO;
  entity: EntityWebDTO;
  author: any;
} & InheritedProps;

const PledgeCard: React.FC<PledgeCardProps> = ({
  pledge,
  entity,
  author,
  onVote,
}) => {
  return (
    <Box
      p="4"
      maxW="320px"
      borderWidth="1px"
      borderRadius="md"
      bgColor="gray.100"
    >
      <Flex align="flex-start">
        <Text variant="h2" mr="auto" fontWeight="bold">
          {entity?.name}
        </Text>
        <VoteInput
          voteScore={pledge?.voteScore}
          voted={pledge?.voted}
          onVote={onVote}
        />
      </Flex>
      <Text
        mt={2}
        fontSize="xl"
        fontWeight="semibold"
        lineHeight="short"
        textAlign="justify"
      >
        {pledge?.description}
      </Text>
      <Text mt={2} fontSize="smaller" lineHeight="short" textAlign="justify">
        {pledge?.createdOn} by {author?.username}
      </Text>
    </Box>
  );
};

export default PledgeCard;
