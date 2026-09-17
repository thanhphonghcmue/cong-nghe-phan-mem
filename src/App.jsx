import { useEffect, useState } from 'react'
import { ArrowRight, CalendarDays, ChevronDown, ChevronLeft, ChevronRight, CirclePlay, Clock3, Facebook, Instagram, MapPin, Menu, Play, Search, Star, Ticket, X, Youtube } from 'lucide-react'

const movies = [
  { id: 1, title: 'Dune: Hành Tinh Cát', sub: 'PHẦN HAI', genre: 'Khoa học viễn tưởng', age: 'T13', time: '166 phút', rating: '9.2', tone: 'dune', quote: 'SỨC MẠNH ĐỂ THAY ĐỔI VẬN MỆNH' },
  { id: 2, title: 'Mai', sub: 'MỘT BỘ PHIM CỦA TRẤN THÀNH', genre: 'Tâm lý · Tình cảm', age: 'T18', time: '131 phút', rating: '8.7', tone: 'mai', quote: 'CÓ NHỮNG NGƯỜI ĐẾN ĐỂ DẠY TA CÁCH YÊU' },
  { id: 3, title: 'Quật Mộ Trùng Ma', sub: 'EXHUMA', genre: 'Kinh dị · Bí ẩn', age: 'T16', time: '134 phút', rating: '8.9', tone: 'exhuma', quote: 'THỨ BỊ CHÔN VÙI KHÔNG NÊN THỨC GIẤC' },
  { id: 4, title: 'Kung Fu Panda 4', sub: 'ĐỊNH MỆNH GỌI TÊN', genre: 'Hoạt hình · Gia đình', age: 'P', time: '94 phút', rating: '8.5', tone: 'panda', quote: 'ANH HÙNG MỚI. HÀNH TRÌNH MỚI.' },
  { id: 5, title: 'Godzilla x Kong', sub: 'ĐẾ CHẾ MỚI', genre: 'Hành động · Phiêu lưu', age: 'T13', time: '115 phút', rating: '8.6', tone: 'kong', quote: 'HAI TITAN. MỘT ĐẾ CHẾ.' },
]

function Brand(){ return <a className="brand" href="#top" aria-label="NOVA Cinema"><span className="brand-mark"><i/><i/><i/></span><span><b>NOVA</b><small>CINEMA</small></span></a> }

function Poster({ movie, active, onBook }){
 return <article className={`movie-card ${active ? 'featured-card' : ''}`}>
   <div className={`poster poster-${movie.tone}`}>
     <div className="poster-noise"/><span className="poster-top">{movie.sub}</span>
     <div className="poster-symbol"><span>{movie.tone === 'panda' ? '功' : movie.tone === 'dune' ? '◉' : movie.tone === 'exhuma' ? '墓' : movie.tone === 'mai' ? 'M' : '⚡'}</span></div>
     <p>{movie.quote}</p><h3>{movie.title}</h3><div className="poster-glow"/>
   </div>
   <div className="movie-info"><div><h3>{movie.title}</h3><p>{movie.genre}</p></div><button onClick={() => onBook(movie)}><Ticket size={16}/> Đặt vé</button></div>
   <div className="meta"><span className="age">{movie.age}</span><span><Clock3 size={14}/>{movie.time}</span><span><Star size={14} fill="currentColor"/>{movie.rating}</span></div>
 </article>
}

function BookingModal({ movie, onClose }){
 const [picked, setPicked] = useState('19:30')
 useEffect(()=>{ const fn=e=>e.key==='Escape'&&onClose(); addEventListener('keydown',fn); return()=>removeEventListener('keydown',fn)},[onClose])
 return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={onClose}><X/></button><span className="eyebrow">ĐẶT VÉ NHANH</span><h2>{movie.title}</h2><p>Chọn khung giờ phù hợp với bạn hôm nay.</p><div className="modal-date"><CalendarDays/><div><small>Thứ năm</small><b>19 tháng 09, 2026</b></div></div><div className="times">{['16:15','19:30','20:45','22:10'].map(t=><button className={picked===t?'active':''} onClick={()=>setPicked(t)} key={t}>{t}<small>2D Phụ đề</small></button>)}</div><button className="continue" onClick={onClose}>Chọn ghế <ArrowRight/></button></div></div>
}

export default function App(){
 const [menu,setMenu]=useState(false); const [tab,setTab]=useState('Đang chiếu'); const [booking,setBooking]=useState(null); const [slide,setSlide]=useState(0)
 const next=()=>setSlide(v=>(v+1)%3); const prev=()=>setSlide(v=>(v+2)%3)
 return <div id="top">
  <header><div className="nav-wrap"><Brand/><nav className={menu?'open':''}><a className="active" href="#movies" onClick={()=>setMenu(false)}>Phim</a><a href="#showtimes" onClick={()=>setMenu(false)}>Lịch chiếu</a><a href="#cinemas" onClick={()=>setMenu(false)}>Rạp chiếu</a><a href="#offers" onClick={()=>setMenu(false)}>Ưu đãi</a><a href="#about" onClick={()=>setMenu(false)}>Về NOVA</a></nav><div className="nav-tools"><button aria-label="Tìm kiếm"><Search/></button><span/><button className="login">Đăng nhập</button><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div></div></header>
  <main>
   <section className={`hero hero-${slide}`}>
    <div className="orb orb-one"/><div className="orb orb-two"/><div className="starfield"/>
    <div className="hero-art"><div className="planet"/><div className="sun"/><div className="traveler"><i/><b/></div></div>
    <div className="hero-content"><span className="eyebrow">SIÊU PHẨM ĐANG CHIẾU</span><h1>DUNE<small>PART TWO</small></h1><p className="hero-tag">HÀNH TINH CÁT: PHẦN HAI</p><div className="hero-meta"><span className="age">T13</span><span><CalendarDays/> 01.03.2026</span><span><Clock3/> 166 phút</span><span><Star fill="currentColor"/> 9.2</span></div><p className="hero-desc">Paul Atreides hợp nhất với Chani và người Fremen trong hành trình trả thù những kẻ đã hủy hoại gia đình anh.</p><div className="hero-actions"><button className="primary" onClick={()=>setBooking(movies[0])}><Ticket/>Đặt vé ngay</button><button className="trailer"><Play fill="currentColor"/>Xem trailer</button></div></div>
    <div className="slider-controls"><button onClick={prev}><ChevronLeft/></button><div>{[0,1,2].map(i=><button key={i} className={slide===i?'active':''} onClick={()=>setSlide(i)}/>)}</div><button onClick={next}><ChevronRight/></button></div>
   </section>
   <section className="quick" id="showtimes"><div className="quick-label"><span>ĐẶT VÉ</span><b>Nhanh chóng</b></div><label><MapPin/><span><small>Chọn rạp</small><b>NOVA Nguyễn Du</b></span><ChevronDown/></label><label><CalendarDays/><span><small>Chọn ngày</small><b>Hôm nay, 19/09</b></span><ChevronDown/></label><label><CirclePlay/><span><small>Chọn phim</small><b>Dune: Hành Tinh Cát</b></span><ChevronDown/></label><button onClick={()=>setBooking(movies[0])}>Tìm suất chiếu <ArrowRight/></button></section>
   <section className="movies section" id="movies"><div className="section-head"><div><span className="eyebrow">TRẢI NGHIỆM ĐIỆN ẢNH</span><h2>Phim tại NOVA</h2></div><div className="tabs">{['Đang chiếu','Sắp chiếu','Suất đặc biệt'].map(x=><button key={x} className={tab===x?'active':''} onClick={()=>setTab(x)}>{x}</button>)}</div><a href="#movies">Xem tất cả <ArrowRight/></a></div><div className="movie-grid">{movies.slice(0,4).map((m,i)=><Poster key={m.id} movie={m} active={i===0} onBook={setBooking}/>)}</div></section>
   <section className="experience" id="cinemas"><div className="experience-copy"><span className="eyebrow">KHÔNG CHỈ LÀ XEM PHIM</span><h2>Chạm đến từng<br/><em>khoảnh khắc.</em></h2><p>Đắm chìm trong từng khung hình với màn chiếu Laser sắc nét, âm thanh Dolby Atmos sống động và ghế ngồi cao cấp.</p><a href="#about">Khám phá NOVA <ArrowRight/></a></div><div className="screen"><div className="screen-light"/><span>Dolby<br/><b>ATMOS</b></span><div className="seats">{Array.from({length:6}).map((_,i)=><i key={i}/>)}</div></div></section>
   <section className="offers section" id="offers"><div><span className="eyebrow">DÀNH RIÊNG CHO BẠN</span><h2>Ưu đãi nổi bật</h2></div><article><span>THỨ 4 VUI VẺ</span><h3>Đồng giá<br/><b>59K</b></h3><p>Cho tất cả suất chiếu 2D</p><button>Khám phá ngay <ArrowRight/></button></article><article className="member"><span>NOVA MEMBER</span><h3>Tích điểm<br/><b>nhân đôi</b></h3><p>Mỗi thứ hai hàng tuần</p><button>Tham gia ngay <ArrowRight/></button></article></section>
  </main>
  <footer id="about"><Brand/><p>Nâng tầm trải nghiệm điện ảnh Việt.</p><div><a href="#top"><Facebook/></a><a href="#top"><Instagram/></a><a href="#top"><Youtube/></a></div><small>© 2026 NOVA Cinema. All rights reserved.</small></footer>
  {booking&&<BookingModal movie={booking} onClose={()=>setBooking(null)}/>} 
 </div>
}
