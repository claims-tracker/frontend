import * as React from "react";
import { PledgeWebDTO } from "api-client/apiSchemas";

export interface PledgeCardProps {
  pledge: PledgeWebDTO;
}

const PledgeCard: React.FC<PledgeCardProps> = ({ pledge }) => {
  return <div>{pledge.id}</div>;
};

export default PledgeCard;
