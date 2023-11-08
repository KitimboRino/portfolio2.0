import React from 'react'

function AboutSection() {
  return (
    <section className="max-w-[87.5rem] items-center bg-neutral-900 self-stretch flex grow flex-col mt-4 rounded-3xl max-md:max-w-full">
      <div className="border border-[color:var(--madiyour-com-mine-shaft,#2E2E2E)] self-stretch flex grow flex-col px-5 py-20 rounded-3xl border-solid max-md:max-w-full">
        <div className="max-w-[1258px] items-start self-center flex w-full flex-col pr-1.5 max-md:max-w-full">
          <div className="max-w-[81rem] items-start self-stretch flex flex-col max-md:max-w-full">
            <div className="justify-center items-center flex w-[258px] max-w-full flex-col self-start">
              <div className="text-neutral-50 text-3xl font-light leading-[120%]">About Rino</div>
              <div className="text-neutral-50 text-lg font-light leading-[120%] self-start">Passionate Front End Engineer</div>
            </div>
            <div className="max-w-[520px] text-zinc-50 text-opacity-60 text-base font-light leading-[140%] mt-4 self-start max-md:max-w-full">
              I am a Front End Engineer and UI/UX Designer. I love grids, simplicity & golf. I am a practising minimalist and simple design addict.
            </div>
            <div className="bg-zinc-800 flex w-full h-px flex-col mt-16 self-start max-md:max-w-full" />
          </div>
          <div className="items-start flex w-[346px] max-w-full flex-col mt-20 self-start max-md:mt-10">
            <div className="text-neutral-50 text-lg font-light leading-[120%] self-start">Stack</div>
            <div className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-start">Software frameworks and tools I use regularly.</div>
          </div>
          <div className="max-w-[78rem] items-start self-stretch flex gap-2.5 mt-9 mx-2.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
              <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-5 pb-2.5 px-5 rounded-lg border-solid">
                <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30286c83-dee5-4238-a807-3f438348907b?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-square object-cover object-center w-full justify-center items-center overflow-hidden self-center" alt="Logo" />
                <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center">Framer</div>
              </div>
            </div>
            <div className="justify-center items-center self-stretch flex flex-col rounded-lg">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5cbf2e33-9add-41ba-8fce-30c1e2ec3841?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-[0.87] object-cover object-center w-full overflow-hidden self-stretch grow" alt="Image" />
            </div>
            <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
              <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-24 pb-2.5 px-5 rounded-lg border-solid">
                <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center">React</div>
              </div>
            </div>
            <div className="justify-center items-center self-stretch flex flex-col rounded-lg">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d90abc2-430c-4a37-90d0-4ee7ed68b3be?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-[0.87] object-cover object-center w-full overflow-hidden self-stretch grow" alt="Image" />
            </div>
            <div className="justify-center items-center self-stretch flex flex-col w-[104px] rounded-lg">
              <div className="border border-[color:var(--madiyour-com-mine-shaft,#222)] self-stretch flex w-full grow flex-col pt-24 pb-2.5 px-5 rounded-lg border-solid">
                <div className="text-zinc-50 text-opacity-60 text-sm font-light leading-[140%] self-center">Trello</div>
              </div>
            </div>
            <div className="justify-center items-center self-stretch flex flex-col rounded-lg">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/15cee603-786f-49ff-a158-2308c32c5d17?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-[0.73] object-cover object-center w-full overflow-hidden self-stretch grow" alt="Image" />
            </div>
          </div>
          <div className="items-start flex w-[425px] max-w-full flex-col mt-16 self-start max-md:mt-10">
            <div className="text-neutral-50 text-lg font-light leading-[120%]">Favorite song</div>
            <div className="text-zinc-50 text-opacity-60 text-base font-light leading-[140%] self-start max-md:max-w-full">Me personally, I can not listen anything else but the Strokes</div>
          </div>
          <div className="min-w-[14rem] items-start self-stretch flex flex-col mt-6 rounded-xl max-md:max-w-full">
            <div className="bg-zinc-800 self-stretch px-3 py-3.5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[10%] max-md:w-full max-md:ml-0">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdf41e54-fb75-4293-8839-68b524652dfe?apiKey=f742a22b09984b259f2749b8e77545e3&" className="aspect-square object-cover object-center w-[120px] shadow-[0px_0px_29px_0px_rgba(0,0,0,0.10),0px_9px_9px_0px_rgba(0,0,0,0.10)] overflow-hidden max-w-full my-auto max-md:mt-7" alt="Image" />
                </div>
                <div className="flex flex-col items-stretch w-[90%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col max-md:max-w-full max-md:mt-6">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0438706-91a1-468b-920d-864a3decceef?apiKey=f742a22b09984b259f2749b8e77545e3" className="aspect-square object-cover object-center w-6 overflow-hidden max-w-full self-end" alt="Icon" />
                    <div className="items-start flex w-[129px] max-w-full gap-1 mt-2 self-start">
                      <div className="text-neutral-900 text-xs font-bold leading-[114.695%] uppercase self-stretch justify-center items-center bg-white bg-opacity-70 w-[50px] max-w-full px-1.5 py-1 rounded-sm">Preview</div>
                      <div className="text-white text-sm font-medium self-stretch">The Strokes</div>
                    </div>
                    <div className="justify-center items-start flex w-[98px] max-w-full gap-1.5 mt-2.5 rounded-[31.25rem] self-start">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88ed10a5-f327-47fe-b2bb-37d4d1cb9f00?apiKey=f742a22b09984b259f2749b8e77545e3" className="aspect-square object-cover object-center w-4 overflow-hidden max-w-full self-start" alt="Icon" />
                      <div className="text-white text-center text-xs font-medium self-start">Save on Spotify</div>
                    </div>
                  </div>
                </div>
                <div className="justify-end items-start flex w-[66px] max-w-full gap-5 self-end max-md:mr-0.5">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5d2d53d-af54-4cd1-ac01-8ecc84456655?apiKey=f742a22b09984b259f2749b8e77545e3" className="aspect-square object-cover object-center w-full overflow-hidden flex-1 mt-3.5" alt="Image" />
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/72f94968-1fc5-4895-8df8-18ba3926d878?apiKey=f742a22b09984b259f2749b8e77545e3" className="aspect-square object-cover object-center w-full overflow-hidden flex-1" alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center flex w-[137px] max-w-full grow flex-col mt-20 rounded-[3.125rem] self-end max-md:mt-10">
            <div className="text-neutral-50 text-right text-base font-light leading-[120%] border border-[color:var(--madiyour-com-alabaster,#FAFAFA)] self-stretch w-full grow pl-3 pr-3 py-2 rounded-[3.125rem] border-solid">More about me</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection