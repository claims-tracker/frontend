import { EntityWebDTO } from "api-client/apiSchemas";
import * as React from "react";

export interface EntityProps {
  entity: EntityWebDTO;
}

const Entity: React.FC<EntityProps> = ({ entity }) => {
  if (!entity) {
    return null;
  }
  return (
    <div>
      {entity.id}
      <button role="button">open</button>
    </div>
  );
};

export default Entity;
