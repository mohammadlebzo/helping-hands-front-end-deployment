import Link from 'next/link'
import Image from "next/image"

export default function PersonalInfo() {
    return (
      <>
        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full flex justify-center">
                <div class="relative">
                  <img
                    src="image/hand-13.jpg"
                    class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
              <div class="w-full text-center mt-20">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                  <div class="p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      3
                    </span>
                    <span class="text-sm text-slate-400">Campaigns</span>
                  </div>
                  <div class="p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      2,454
                    </span>
                    <span class="text-sm text-slate-400">Followers</span>
                  </div>

                  <div class="p-3 text-center">
                    <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      564
                    </span>
                    <span class="text-sm text-slate-400">Following</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-2">
              <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                John{" "}
              </h3>
              <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                Location
              </div>
            </div>
            <div class="mt-6 py-6 border-t border-slate-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                  <p class="font-light leading-relaxed text-slate-600 mb-4">
                    Overview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
