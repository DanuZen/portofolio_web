interface TornDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
}

/**
 * Torn paper effect divider component
 * Creates a realistic hand-torn paper edge effect between sections
 */
export function TornDivider({ className = "", flip = false, color = "currentColor" }: TornDividerProps) {
  return (
    <div className={`w-full ${className}`} style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 lg:h-20"
        style={{ display: 'block' }}
      >
        <path
          d="M0,0 L0,35 Q15,42 25,38 Q35,34 45,40 Q52,45 58,42 Q68,38 75,44 Q85,50 95,45 Q105,40 115,48 Q125,55 138,50 Q148,45 158,52 Q170,58 182,54 Q195,50 205,56 Q218,62 230,58 Q242,54 255,60 Q268,65 280,62 Q295,58 308,64 Q322,70 335,66 Q348,62 362,68 Q378,74 392,70 Q408,66 422,72 Q438,78 452,74 Q468,70 482,76 Q498,82 512,78 Q528,74 542,80 Q558,86 572,82 Q588,78 602,84 Q618,90 632,86 Q648,82 662,88 Q678,94 692,90 Q708,86 722,92 Q738,98 752,94 Q768,90 782,96 Q798,102 812,98 Q828,94 842,100 Q858,106 872,102 Q888,98 902,104 Q918,110 932,106 Q948,102 962,108 Q978,114 992,110 Q1008,106 1022,112 Q1038,118 1052,114 Q1068,110 1082,116 Q1098,122 1112,118 Q1128,114 1142,120 Q1158,126 1172,122 Q1185,118 1200,124 L1200,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
