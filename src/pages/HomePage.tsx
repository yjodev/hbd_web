import React, { ChangeEvent, useState } from 'react';

const dummy = [{
  name: 'Mac Book Pro',
  price: 2000000,
  description: '개발자 필수템',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: 'AirPod Pro',
  price: 260000,
  description: '출퇴근 필수템',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: 'Starbucks Americano',
  price: 4500,
  description: '간편한 생일선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: 'Icecream Cake',
  price: 33000,
  description: '맛있는 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '비눗방울',
  price: 3000,
  description: '쓸데없는 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '썬글라스',
  price: 12000,
  description: '쓸데없는 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '와인',
  price: 45000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '조말론 핸드워시',
  price: 33000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '디올 립글로우',
  price: 46000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '입생로랑 핸드크림',
  price: 45000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '록시땅 필로우미스트',
  price: 36000,
  description: '럭셔리한 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
}, {
  name: '인센스 스틱',
  price: 40000,
  description: '힐링 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
}, {
  name: 'Icecream',
  price: 8900,
  description: '파인트 아이스크림',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
}, {
  name: '무드등',
  price: 13000,
  description: '무드있는 생일선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
}, {
  name: '휴대용 선풍기',
  price: 15000,
  description: '여름이 오고있어요',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
}, {
  name: '디퓨저',
  price: 23000,
  description: '포근한 방을 위한 힐링 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
}, {
  name: '롤 케이크',
  price: 14000,
  description: '호불호 없는 맛있는 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '애플망고',
  price: 29000,
  description: '맛있는 열대과일을 선물하세요',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
},
{
  name: '러쉬',
  price: 30000,
  description: '힐링 선물',
  image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
}]

const filters = [{
  id: 1,
  min: 0,
  max: 10000,
}, {
  id: 2,
  min: 10000,
  max: 20000,
}, {
  id: 3,
  min: 20000,
  max: 30000,
}, {
  id: 4,
  min: 30000,
  max: 40000,
}, {
  id: 5,
  min: 40000,
  max: 50000,
}, {
  id: 6,
  min: 50000,
  max: 3000000,
},]


export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<any>();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  console.log('search', search)
  return (
    <div className="header">
      <div className="container mx-auto px-6 py-3">

        <div className="flex items-center justify-between">

          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
            </svg>
            <span className="mx-1 text-sm">Seoul</span>
          </div>

          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            선물 고르기
          </div>

          <div className="flex items-center justify-end w-full">
            <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0" onClick={() => setOpen(true)}>
              <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
            <div className="flex sm:hidden">
              <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
        <nav className="sm:flex sm:justify-center sm:items-center mt-4">
          <div className="flex flex-col sm:flex-row">
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[0])}>만원이하</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[1])}>만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[2])}>이만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[3])}>삼만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[4])}>사만원대</a>
            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#" onClick={() => setFilter(filters[5])}>오만원이상</a>
          </div>
        </nav>
        <div className="relative mt-6 max-w-lg mx-auto">


          <span className="absolute inset-y-0 left-0 pl-3 flex items-center" >
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <form onSubmit={onChangeSearch}>
            <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" onChange={onChangeSearch} />
          </form>
        </div>

      </div >


      {/* 장바구니*/}

      <div className={`fixed ${open ? 'right-0' : '-right-80'} duration-100 ease-in-out transition transition-all top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-medium text-gray-700">Your cart</h3>
          <button className="text-gray-600 focus:outline-none" onClick={() => setOpen(false)}>
            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <hr className="my-3" />
        <div className="flex justify-between mt-6">
          <div className="flex">
            <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
              <div className="flex items-center mt-2">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
                <span className="text-gray-700 mx-2">2</span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </div>
            </div>
          </div>
          <span className="text-gray-600">20$</span>
        </div>
        <div className="flex justify-between mt-6">
          <div className="flex">
            <img className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">Mac Book Pro</h3>
              <div className="flex items-center mt-2">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
                <span className="text-gray-700 mx-2">2</span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </div>
            </div>
          </div>
          <span className="text-gray-600">20$</span>
        </div>
        <div className="mt-8">
          <form className="flex items-center justify-center">
            <input className="form-input w-48" type="text" placeholder="Add promocode" />
            <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <span>Apply</span>
            </button>
          </form>
        </div>
        <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
          <span>Chechout</span>
          <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>



      <main className="my-8" />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">가격대별 선물</h3>
        <span className="mt-3 text-sm text-gray-500">10+ Products</span>


        {/* 상품 목록*/}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {dummy.slice().filter((data: any) => {

            if (filter && (data.price < filter.min || data.price >= filter.max)) {
              return false;
            }
            if (search && (!data.description.toUpperCase().includes(search.toUpperCase()) && !data.name.toUpperCase().includes(search.toUpperCase()))) {
              return false;
            }
            return true;
          }).map((data: any) => <div className="">

            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ backgroundImage: "url(" + data.image + ")" }}>
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">{data.name}</h3>
                <h3 className="text-gray-700 uppercase">{data.description}</h3>
                <span className="text-gray-500 mt-2">{data.price}원</span>
              </div>
            </div>
          </div>)}
        </div>


      </div>
    </div>
  )

};
