import React from 'react';
import { useParams } from 'react-router-dom';
import group from '../assets/group.jpeg'; // Example image, replace with actual image path
import {motion} from 'framer-motion';
const chunkSentences = (text, chunkSize = 3) => {
  const sentenceRegex = /(?<!\d)\. (?=[A-Z])/g; // Match period + space NOT after digit
  const sentences = text.split(sentenceRegex).map(s => s.trim()).filter(Boolean);

  const chunks = [];
  for (let i = 0; i < sentences.length; i += chunkSize) {
    const chunk = sentences.slice(i, i + chunkSize).join('. ').trim();
    const endsWithPunctuation = /[.!?]$/.test(chunk);
    chunks.push(endsWithPunctuation ? chunk : chunk + '.');
  }

  return chunks;
};

const BlogDetail = () => {
    const para="According to the U.S. Bureau of Labor Statistics, there were over 2.8 million nonfatal workplace injuries and illnesses reported in 2023. OSHA fines are also on the rise, with increased scrutiny on companies failing to meet evolving safety standards, highlighting various safety concerns. For employers, this isn’t just a compliance issue it’s a major cost and culture issue.June marks National Safety Month by the National Safety Council (NSC), making now the perfect time to re-evaluate your safety protocols and ensure your teams are protected. With evolving work environments and new safety risks in 2025, staying proactive is key to employee wellbeing and your company’s reputation.In this blog, we’ll cover the most pressing workplace safety tips for employers, along with some essential workplace safety tips, the best practices for keeping your teams safe, and how to leverage National Safety Month to build a culture of safety that lasts year-round."
  const { slug } = useParams();


  // Example API call to fetch blog by slug
  // useEffect(() => {
  //   fetch(`/api/type=""blogs/${slug}`).then(...);
  // }, [slug]);

  return (
    <>
    <div className="mb-16 relative overflow-x-hidden">
  <motion.img
    src={group} 
    alt="Group of Employees"
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="w-full h-[350px] md:h-[550px] object-cover shadow-lg"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 flex flex-col gap-4 items-center justify-center text-white text-center px-4">
    <h2 className="text-4xl md:text-6xl font-semibold font-[poppins] mb-3">
      Blogs
    </h2>
    <p className="text-xl md:text-5xl font-bold capitalize leading-relaxed">
      {slug.replace(/-/g, ' ')}
    </p>
     <p className="text-2xl  font-semibold ">4 June 2025</p>
  </div>
</div>

   <div className="container mt-12 mx-auto px-4 py-8">
  {/* Centered Title */}
  <h1 className="text-3xl md:text-4xl font-bold mb-6 capitalize text-center leading-relaxed">
    {slug.replace(/-/g, ' ')}
  </h1>

  {/* Blog content */}
 
   <div className="max-w-4xl mx-auto text-lg leading-8 text-gray-800">
  {chunkSentences(para, 3).map((para, i) => (
    <p key={i} className="mb-6">{para}</p>
  ))}
</div> 
  </div>

    </>

  );
};

export default BlogDetail;