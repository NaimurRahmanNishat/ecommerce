
import Title from './../components/Title';
import { assets } from './../assets/assets';
import NewsLetterBox from './../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates amet nemo laboriosam consequuntur, odit quibusdam eveniet obcaecati eius, officiis fuga repellendus dolor. At tempore animi expedita eius asperiores inventore.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur laborum suscipit alias officiis non vel quaerat blanditiis rem numquam nemo, ad ratione voluptatibus accusamus delectus veniam! Qui, cum. Necessitatibus, laborum.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nostrum non iure voluptatem! Iste sed tenetur porro sint autem magnam vitae, dolores labore impedit odio molestiae ut, accusantium consectetur excepturi.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, dignissimos.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, at?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic dolor qui!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About