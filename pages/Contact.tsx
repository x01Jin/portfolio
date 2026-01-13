import React from 'react';
import CardboardBox from '../components/CardboardBox';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
       <h2 className="text-4xl font-bold text-[#3e2723] mb-8 text-center bg-[#e6ccb2] inline-block px-4 border-b-4 border-[#3e2723] w-full">
        /contact
      </h2>

      <CardboardBox className="flex flex-col gap-6 items-center text-center py-10">
        <p className="text-xl mb-4">
          Feel free to reach out for collaborations, troubleshooting, or just to chat about AI and Code.
        </p>

        <div className="w-full space-y-4">
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="flex items-center justify-center w-full bg-[#e6ccb2] border-2 border-[#5d4037] p-4 shadow-[4px_4px_0_0_#5d4037] hover:bg-[#dcb386] hover:translate-y-1 hover:shadow-[2px_2px_0_0_#5d4037] transition-all text-xl"
          >
            <span className="font-bold mr-2">EMAIL:</span> {SOCIAL_LINKS.email}
          </a>

          <a 
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-full bg-[#4682b4] text-white border-2 border-[#2c3e50] p-4 shadow-[4px_4px_0_0_#2c3e50] hover:bg-[#36648b] hover:translate-y-1 hover:shadow-[2px_2px_0_0_#2c3e50] transition-all text-xl"
          >
             FACEBOOK MESSENGER
          </a>

           <div className="flex items-center justify-center w-full bg-[#7289da] text-white border-2 border-[#4a5d91] p-4 shadow-[4px_4px_0_0_#4a5d91] text-xl cursor-default">
             <span className="font-bold mr-2">DISCORD:</span> {SOCIAL_LINKS.discord}
          </div>
        </div>
      </CardboardBox>
    </div>
  );
};

export default Contact;
