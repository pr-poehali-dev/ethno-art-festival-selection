import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

const HERO = 'https://cdn.poehali.dev/projects/69d74d4b-d110-4bdd-8e59-a0756922e712/files/40a3359d-6838-4511-93d8-fbb80e162735.jpg';
const CRAFT = 'https://cdn.poehali.dev/projects/69d74d4b-d110-4bdd-8e59-a0756922e712/files/1fd9269f-d938-48d9-b83d-f99968db43a1.jpg';
const PATTERN = 'https://cdn.poehali.dev/projects/69d74d4b-d110-4bdd-8e59-a0756922e712/files/e599d0b9-bc04-4f34-b3e7-79bb5c1a205c.jpg';

const NAV = [
  { id: 'about', label: 'О фестивале' },
  { id: 'contest', label: 'Конкурсный отбор' },
  { id: 'participants', label: 'Участники' },
  { id: 'program', label: 'Программа' },
  { id: 'news', label: 'Новости' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'register', label: 'Регистрация' },
  { id: 'contacts', label: 'Контакты' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Спасибо за участие. Мы свяжемся с вами после рассмотрения заявки.',
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster />

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={24} />
            <span className="font-display font-700 tracking-wide text-ink text-lg">Голос души </span>
          </button>
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('register')} className="hidden lg:inline-flex">
            Подать заявку
          </Button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-accordion-down">
            <div className="container py-4 flex flex-col gap-3">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left py-1 text-muted-foreground hover:text-primary"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={HERO} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/90" />
        </div>
        <div className="relative z-10 container text-center text-background py-32">
          <p className="animate-fade-up text-gold tracking-[0.3em] uppercase text-sm mb-6">
            Всероссийский фестиваль этноискусств
          </p>
          <h1 className="animate-fade-up font-display md:text-8xl font-700 leading-none mb-6 text-6xl" style={{ animationDelay: '0.1s' }}>Голос души и сердце традиций</h1>
          <p className="animate-fade-up max-w-2xl mx-auto text-lg md:text-xl text-background/80 mb-10 text-balance" style={{ animationDelay: '0.2s' }}>
            Конкурсный отбор талантливых вокалистов и мастеров народного промысла со всей России.
            Сохраняем традиции — открываем новые имена.
          </p>
          <div className="animate-fade-up flex flex-wrap gap-4 justify-center" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" onClick={() => scrollTo('register')} className="text-base">
              <Icon name="Send" size={18} className="mr-2" /> Участвовать
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo('about')} className="text-base bg-transparent border-background/40 text-background hover:bg-background/10">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 ethnic-divider" />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">О фестивале</p>
            <h2 className="font-display text-5xl font-600 text-ink mb-6">Голос традиции в каждом сердце</h2>
            <p className="text-muted-foreground text-lg mb-4">
              «Звоны Земли» — федеральный проект, объединяющий хранителей народной культуры. Мы проводим
              конкурсный отбор по всей России, чтобы найти и поддержать талантливых вокалистов и мастеров
              народного промысла.
            </p>
            <p className="text-muted-foreground text-lg">
              Победители получают гранты, наставничество и сцену главного гала-концерта фестиваля.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { n: '85', t: 'регионов России' },
                { n: '2 000+', t: 'участников' },
                { n: '12', t: 'лет истории' },
              ].map((s) => (
                <div key={s.t}>
                  <div className="font-display text-4xl font-700 text-primary">{s.n}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={CRAFT} alt="Мастер народного промысла" className="rounded-sm w-full object-cover aspect-[4/5] shadow-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-gold -z-0" />
          </div>
        </div>
      </section>

      {/* CONTEST */}
      <section id="contest" className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Конкурсный отбор</p>
            <h2 className="font-display text-5xl font-600 text-ink">Как стать участником</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'FileText', t: 'Заявка', d: 'Заполните форму и приложите портфолио или видео работ' },
              { icon: 'Search', t: 'Отбор', d: 'Жюри рассматривает заявки и формирует шорт-лист' },
              { icon: 'Mic', t: 'Прослушивание', d: 'Очный и онлайн-этап в федеральных округах' },
              { icon: 'Award', t: 'Гала-концерт', d: 'Финалисты выступают на главной сцене фестиваля' },
            ].map((step, i) => (
              <div key={step.t} className="bg-card p-8 rounded-sm hover-lift border border-border">
                <div className="flex items-center justify-between mb-4">
                  <Icon name={step.icon} className="text-primary" size={32} />
                  <span className="font-display text-5xl font-700 text-gold/40">{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-600 text-ink mb-2">{step.t}</h3>
                <p className="text-muted-foreground text-sm">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPANTS */}
      <section id="participants" className="py-24 container">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Участники</p>
          <h2 className="font-display text-5xl font-600 text-ink">Голоса и руки России</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Анастасия Воронцова', city: 'Вологодская область', cat: 'Народный вокал' },
            { name: 'Тимур Хасанов', city: 'Республика Татарстан', cat: 'Резьба по дереву' },
            { name: 'Марья Сёмина', city: 'Архангельск', cat: 'Кружевоплетение' },
            { name: 'Ансамбль «Берегиня»', city: 'Краснодарский край', cat: 'Фольклорный ансамбль' },
            { name: 'Дамир Юсупов', city: 'Башкортостан', cat: 'Горловое пение' },
            { name: 'Елена Калинина', city: 'Нижний Новгород', cat: 'Хохломская роспись' },
          ].map((p) => (
            <div key={p.name} className="group border border-border rounded-sm overflow-hidden hover-lift bg-card">
              <div className="h-2 ethnic-divider" />
              <div className="p-6">
                <span className="text-xs text-gold uppercase tracking-wider">{p.cat}</span>
                <h3 className="font-display text-2xl font-600 text-ink mt-2">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1">
                  <Icon name="MapPin" size={14} /> {p.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-24 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${PATTERN})`, backgroundSize: '400px' }} />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Программа</p>
            <h2 className="font-display text-5xl font-600 text-ink">Дни фестиваля</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { d: '15 сент.', t: 'Открытие и парад регионов', p: 'Главная сцена, 12:00' },
              { d: '16 сент.', t: 'Конкурс народного вокала', p: 'Большой зал, 11:00' },
              { d: '17 сент.', t: 'Ярмарка народных промыслов', p: 'Ремесленная слобода, весь день' },
              { d: '18 сент.', t: 'Мастер-классы и встречи', p: 'Творческие площадки, 10:00' },
              { d: '19 сент.', t: 'Гала-концерт и награждение', p: 'Главная сцена, 18:00' },
            ].map((e) => (
              <div key={e.t} className="flex items-center gap-6 bg-card border border-border rounded-sm p-5 hover:border-primary transition-colors">
                <div className="font-display text-2xl font-700 text-primary w-24 shrink-0">{e.d}</div>
                <div className="ethnic-divider w-1 h-12 shrink-0" style={{ width: '4px' }} />
                <div>
                  <h3 className="font-display text-xl font-600 text-ink">{e.t}</h3>
                  <p className="text-muted-foreground text-sm">{e.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-24 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Новости</p>
            <h2 className="font-display text-5xl font-600 text-ink">Лента событий</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: '10 июня 2026', t: 'Открыт приём заявок на фестиваль', d: 'Подать заявку могут вокалисты и мастера из всех регионов страны.' },
              { date: '2 июня 2026', t: 'Объявлен состав жюри', d: 'В этом году заявки оценивают заслуженные артисты и этнографы России.' },
              { date: '28 мая 2026', t: 'Новые площадки в 5 округах', d: 'Очные прослушивания пройдут в шести федеральных округах.' },
            ].map((n) => (
              <article key={n.t} className="bg-card border border-border rounded-sm p-6 hover-lift">
                <span className="text-xs text-muted-foreground">{n.date}</span>
                <h3 className="font-display text-2xl font-600 text-ink mt-3 mb-2">{n.t}</h3>
                <p className="text-muted-foreground text-sm mb-4">{n.d}</p>
                <button className="text-primary text-sm font-600 flex items-center gap-1 hover:gap-2 transition-all">
                  Читать <Icon name="ArrowRight" size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 container">
        <div className="text-center mb-16">
          <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Галерея</p>
          <h2 className="font-display text-5xl font-600 text-ink">Мгновения фестиваля</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[HERO, CRAFT, PATTERN, HERO, CRAFT, PATTERN, HERO, CRAFT].map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-sm ${i % 3 === 0 ? 'row-span-2' : ''}`}>
              <img src={img} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="py-24 bg-ink text-background relative">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `url(${PATTERN})`, backgroundSize: '300px' }} />
        <div className="container relative max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">Регистрация участника</p>
            <h2 className="font-display text-5xl font-600">Заявите о своём таланте</h2>
            <p className="text-background/70 mt-4">Заполните форму, приложите портфолио и видео ваших работ или выступлений.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-card text-foreground rounded-sm p-8 space-y-5 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">ФИО / Название коллектива</Label>
                <Input id="name" required placeholder="Иванова Мария" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="region">Регион</Label>
                <Input id="region" required placeholder="Вологодская область" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@mail.ru" className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" required placeholder="+7 900 000-00-00" className="mt-1.5" />
              </div>
            </div>
            <div>
              <Label htmlFor="category">Номинация</Label>
              <Input id="category" required placeholder="Народный вокал / Резьба по дереву / ..." className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="about">О себе и творчестве</Label>
              <Textarea id="about" rows={4} placeholder="Расскажите о своём опыте, наградах и работах..." className="mt-1.5" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="portfolio">Портфолио (PDF, фото)</Label>
                <Input id="portfolio" type="file" accept=".pdf,image/*" multiple className="mt-1.5 cursor-pointer file:text-primary" />
              </div>
              <div>
                <Label htmlFor="video">Видео работ</Label>
                <Input id="video" type="file" accept="video/*" multiple className="mt-1.5 cursor-pointer file:text-primary" />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full text-base">
              <Icon name="Send" size={18} className="mr-2" /> Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        </div>
      </section>

      {/* CONTACTS / FOOTER */}
      <footer id="contacts" className="bg-card border-t border-border pt-16 pb-8">
        <div className="container grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Flame" className="text-primary" size={24} />
              <span className="font-display text-2xl font-700 text-ink">Звоны Земли</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Федеральный музыкально-ремесленный фестиваль этноискусств. Сохраняем и приумножаем
              народное наследие России.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl font-600 text-ink mb-4">Контакты</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2"><Icon name="Mail" size={16} /> info@zvonyzemli.ru</li>
              <li className="flex items-center gap-2"><Icon name="Phone" size={16} /> 8 (800) 000-00-00</li>
              <li className="flex items-center gap-2"><Icon name="MapPin" size={16} /> Москва, ул. Народная, 1</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xl font-600 text-ink mb-4">Мы в сети</h4>
            <div className="flex gap-3">
              {['Send', 'Youtube', 'Instagram'].map((s) => (
                <button key={s} className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Icon name={s} size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="ethnic-divider mt-12 mb-6" />
        <p className="container text-center text-muted-foreground text-sm">
          © 2026 Фестиваль «Звоны Земли». При поддержке Министерства культуры РФ.
        </p>
      </footer>
    </div>
  );
};

export default Index;