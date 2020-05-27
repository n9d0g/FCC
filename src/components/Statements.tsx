import React from "react";

interface MyMessageProps {
  churchStatement?: string;
}

export const statements = ["mission", "vision"];

export function Statements(props: MyMessageProps): any {
  switch (props.churchStatement) {
    case "vision": {
      return (
        <div>
          vision: a Christ-centred, Holy Spirit-led community committed to the
          building of strong relationships and planting of healthy, reproducing
          churches.
        </div>
      );
    }
    case "mission": {
      return (
        <div>
          mission: to introduce and represent Christ through our nurturing small
          group-driven ministries in the community.
        </div>
      );
    }
    default: {
      return <div>Welcome to Freedom in Christ Church!</div>;
    }
  }
}

export function ChurchStatements(): any {
  return (
    <div>
      {statements.map((statement) => {
        return <Statements churchStatement={statement} />;
      })}
    </div>
  );
}
