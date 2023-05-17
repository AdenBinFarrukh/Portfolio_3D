// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");

import React from "react";
import { useMediaQuery } from "react-responsive";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    {isMobile ? (
                        <img src={technology.icon} alt={technology.name} />
                    ) : (
                        <BallCanvas icon={technology.icon} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
