import * as React from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  createIcon,
  Flex,
  IconButton,
  IconButtonProps,
  Text,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useState } from "@storybook/addons";
import { useCreateLocalCopy } from "src/hooks/useCreateLocalCopy";
import { VotedUpIcon } from "icons/VotedUpIcon";
import { VoteUpIcon } from "icons/VoteUpIcon";
import { VotedDownIcon } from "icons/VotedDownIcon";
import { VoteDownIcon } from "icons/VoteDownIcon";

export type VoteType = 0 | -1 | 1;

export interface VoteInputProps {
  voteScore: number | undefined;
  voted: VoteType | undefined;
  loggedIn?: boolean;
  logIn?: () => void;
  onVote: (type: VoteType) => void;
}

const sharedButtonProps: Partial<IconButtonProps> = {
  variant: "ghost",
  colorScheme: "purple",
  height: "1.5rem",
};

const VoteInput: React.FC<VoteInputProps> = ({ voteScore, voted, onVote }) => {
  const [score, setScore] = useCreateLocalCopy(voteScore ?? 0);
  const [votedFinal, setVoted] = useCreateLocalCopy(voted ?? 0);
  const voteUpOrDown = React.useCallback(
    (defaultVote: -1 | 1) => () => {
      const finalVote = votedFinal === defaultVote ? 0 : defaultVote;
      onVote?.(finalVote);
      setVoted(finalVote);
      const multiplier = votedFinal === -1 * defaultVote ? 2 : 1;
      const finalScore =
        votedFinal !== defaultVote
          ? score + multiplier * defaultVote
          : score - multiplier * defaultVote;
      setScore(finalScore);
    },
    [votedFinal, score, onVote, setVoted, setScore]
  );
  const voteUp = React.useCallback(() => voteUpOrDown(1)(), [voteUpOrDown]);
  const voteDown = React.useCallback(() => voteUpOrDown(-1)(), [voteUpOrDown]);
  return (
    <Flex alignItems="center">
      <IconButton
        {...sharedButtonProps}
        aria-label="Vote down"
        icon={votedFinal === -1 ? <VotedDownIcon /> : <VoteDownIcon />}
        onClick={voteDown}
        test-id="vote-down-button"
      />
      <Text textAlign="center" minW="1rem">
        {score}
      </Text>
      <IconButton
        {...sharedButtonProps}
        aria-label="Vote up"
        icon={votedFinal === 1 ? <VotedUpIcon /> : <VoteUpIcon />}
        onClick={voteUp}
        test-id="vote-up-button"
      />
    </Flex>
  );
};

export default VoteInput;
