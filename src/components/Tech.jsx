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
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
    const isMobile = window.innerWidth <= 767;

    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    {isMobile ? (
                        <img src={technology.icon} alt={technology.name} />
                    ) : (
                        <div className="w-28 h-28" key={technology.name}>
                            <BallCanvas icon={technology.icon} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
