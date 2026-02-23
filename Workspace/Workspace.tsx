"use client";

import React from "react";
import Split from "react-split";
import ProblemDescription from "./Problemdescription/Problemdescription";
import Playground from "./Playground/Playground";

type WorkspaceProps = {};

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Split className="split" minSize={300} gutterSize={6}>
      <div>
        <ProblemDescription />
      </div>

      <div>
        <Playground />
      </div>
    </Split>
  );
};

export default Workspace;