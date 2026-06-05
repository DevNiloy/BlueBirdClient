import { motion } from "framer-motion";
import { ArrowRight, Beaker, GraduationCap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  // Client List grouped with distinct types for icons
  const clients = [
    { name: "INCEPTA PHARMA", type: "pharma" },
    { name: "ACI", type: "pharma" },
    { name: "ACME", type: "pharma" },
    { name: "SUN PHARMA", type: "pharma" },
    { name: "GENTRY PHARMA", type: "pharma" },
    { name: "HEALTHCARE", type: "pharma" },
    { name: "ICDDRB", type: "institute" },
    { name: "EDCL", type: "pharma" },
    { name: "ORION PHARMA", type: "pharma" },
    { name: "POPULAR PHARMA", type: "pharma" },
    { name: "RENATA PHARMA", type: "pharma" },
    { name: "Ziska Pharmaceuticals", type: "pharma" },
    { name: "Eskayef Pharmaceuticals", type: "pharma" },
    { name: "Dhaka University", type: "university" },
    { name: "Noakhali Science & Technology University", type: "university" },
    { name: "United International University (UIU)", type: "university" },
  ];

  // Duplicate list to ensure seamless infinite looping layout
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden">
      {/* 1. HERO SECTION WITH SKEWED WEDGED CUT */}
      <section className="relative min-h-[85vh] bg-slate-950 text-white flex items-center pt-20 pb-36 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Exact Image representation with Mix Blend Mode & Tint */}
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFRkXFRUYGBUXFRUVFhUXFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEsQAAIBAgQCCAIGBgcECwEAAAECEQADBAUSITFBBhMiUWFxgZGhsRQyQlLB0SNicpLh8AczQ4KisvEVU5PCJGNkc3SEo7PD0uIW/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQBAgUABgf/xAA4EQACAgEDAgQDCAEDAwUAAAAAAQIDEQQSITFBBRMiUWFxsRQjMoGRocHwBkJS4RYzYhVDcsLx/9oADAMBAAIRAxEAPwD5CgppITbL9NXwCyQYVDLJkagtk7FSQcaoZKK6oF7BeGWjRQrYy9rfCrtAlIjibZOwE71EkWrkl1LsLkdy5ygVKolIpZrq6zV5L0URd27R8aZrojExdV4pOfEeDUW8OqjYACmEY0rJzeWLbBBuvHIVXuNzTVSyW5uSLe1dLoD0qTnyfOVxN1mMkxJpBTk2esdVUYrANj1NDt6B9PhsEt2zQFyOvgs6qr7Qe88bVUcQkZZLrOHmhN4GYQyXdTFR1L8IqubV2CHJFYv12wjzcExiDV1UDlqTkk0VVIXnqWRa331fYkA81sgUqMInc2Q0VBfJA2zUFskhhz3V2Djow57qgnDDcFluo70OUmugeulN+oJx+HVAAtGqk3HkV1dcIyW0Vuau2CSONZPdVXFloyRWbJqu1hFJHFtGowWyNly+4ZKoxE8QKa2PsjOeoguHIrxFo2xLqyjxFRJbepMJKx4i8gjXlJgGh7k+gfZJLk9Fcdk9XHEryQJNdJYR1b3PCBg4oWRja8DfLMMW3FN1xbM3UWqPUd2cpmJphVmdLV46ByYK2vGKuopC7unLoFDH2rfdU7kgLosmUXelKjYVV3RQReGTfUpXPXeQOEVysyX+wwr6hPRu4S9wmph3B65JRjgb5yf0fpV5dBHSL1nzzD3hJ8zSMZLJ6myuWEV4tgaFc+BrRxwzuDsSKWg+TRsisEnsUzgznJZKL9uKq0Eiy/LlmlLFyatD9ITfs70aEeBS6b3cCvFJVmkDUmwRVqES2EWUosUK2PA0y3CBnUHhO9MQjliF9rjF4GXSHKkVAy7eHfVrq1tyhbQamUp7ZGRYmkD0KSwX4YjnU5O2hDFBXZJUUTt4xRyqCywQu5gOQqCdxR/tIjhXJYOlNsGvYgtVnIEoLuVo2486rnks4rBoL1uFHlTb6GbH8bQBcFBY3E5bsFhIiql8n2DongLb4dWjlT7saSweWdCnOTkZL+lQW0t20X6xeY8AN6FqJZhyO+EVqN0nHokYXI7atfRW4Ex60pUszRtaqTjVKR9SwHQ224ktAAngDWg4pPB5qGpsll9EKhldlbpQhTB499X2xKS1NrhlMV9LsNb1qqgQBSWraysG14KpODchEuXLxpetZ6mrc8dB1l95baxFaMJxSMDUaeycslt7NTyrpXpFa/D5PqLMVjnY8aDK7I7DRKKAsQzHmapKYWFWOwMgINUTDSibHo/g0Nssx3NPVYwYGtsmp4SCejrAXLgolfVi+u/BFjTPX/RelXn0E9GvvD5pYQlj51lRzk9nPCgi66lTYuDtPJbgvLaDWuRy54iGJYLGn4wyYNt21hP+yZFE8lC71zI/QNA4UOWniM1eJT6CLHY0hopSfpeDUqlvWWBPipqmQuERQ1yIeAm00UWLwLzSYdhsdpo0bMCVun3HMbmhcRXTsydTplB5FLClmjRUjlRgnJwmuJyRIqCTkVxxzTXE5Paa44nZsMSAAeNVbSCRhKTwkaXHW9KLq2MUeFilHgVu08q58oUyCYmoJXCI6I2NRgncmbbo10k6uz1bSNz8TNN1WRx6jA1uitc3KvoxT06br9DKdlBn1quqaklgY8GrlVuUl1M3gsO1u4jyOyZpODw8o2roqUXF9zXXOkmIeBb1DaNuH8acjZKXRGLPRUwfrYCr3FbXc1eNTtmnlkt1SjsgV5he61tQoNsN7yhvS2KiO1gwtnvqipaGZaqDO9S1d5UiPtNZFrTVDrkXjfW+5WTQsNB00yJqMsthECK7J21BFvHuq6QdqNXa0K36aE+WNeiV8lnp3TSzkxPFK1FIfZ6f0XpTE+hlaP8A7hhcvMO1ZsHiTPV3RbgsFmMPGpt6EaVYkSy00GlcjepklEd5dWlWuDzWoeRsGoohgHxYkVDDVcMy+MyuWmlJ05eTZq1e2OCkZZFU8lBHqmzxwwFTsSI82TK3AqHgumyo1QIiPVE8q4nODv0Zu6owWTO/RTUYLcnvo1dgjLOdSKhotFk0sLQ3kYjtCEwqUNuQeMYDjAZbbPIVn6m+yK4NTTaeqXUfYPL7Y3CisG3VWy4bNqvT1x6IQdND2lHDat3wiTdXJheMxW9YMzY41sR6mFPoW4o9o+nyqZvkrVH0hV607OBbBJ4wK7a2+Cu+EI5my0Ya8bbOytpUgEkbAnlXSUsckQnW5pJksHY1nyocRizgb3rRtaYFO1tx6GRdFWN5NDcw6vaGqBI5kD50/jK5POxnKNnpMhjba25AdY8DScko9zeqlK1Lhi9cQPvChb0Mul+xL6dFd5pH2bJG9mEiudqwTDTNMES6SaCuWNPMUXGau4IpG1lZehSihiE2y+xb1Cr1wyCvuaHfRhIL05p1jJi+Iy3JGhzTe36UxLoZWn4sMRh7PbrPjD1Hp7LvuxkuXauNH8lPqI/a3HoGYbL1WrxqjEXt1VlgUGReYonCFmpyK7uPUc6q5pBI6ebAr2bChu6KGoaKbAbuZTQnehuGhYJcxZNCdwzDSYKDcmhu1jMdOkWW7YNU8wJ5KQTbw4qykVdaDbVgd1XUgTrOXrfhXZydsaFGNuEGqvgvHkD+kHxqu8v5R4Yiu3FfLLFerZIwyXWVHBKyNMvV2A0zNJ3OC5kammU5LCHL/SbfLUPlWbt0t5pt6mr4i/NLNy8Ax2jlT2mUKltiIauNl3qYhNvSSD3U/F5MmyGBhmOBIYbcUQ+6g0GU+RmNXpWDS5FiLVjFN1kaSmx8Ry+dPJ4mYFsXOnpkM6UY+2cEwSBquBo2+9Jq969Iv4dnzsNGe6KgO4SRLMAJ8aUqWTa1MtsTbZ3gLaXEBKmByO1aVKWMs8xq7Jp4RhenlxjcTSxjTwBP4ULVt8YH/BoxUHuXcx7Tzms95N9Y7HgDUHDLDWSUoi6A2+SL2SK5krklh1NTGWCs620W3bh4VLsKxoWMhFjDzvRYw3C87djwEBIFEUcAJWbxjkB3ajUiGtXCHGa3Yt+lGm8IR00M2GJTGEGs5W4Z6R6bdEvOcMKs9Qyi0CfUrbNnNUeokwi0EEVPj2POqu6TCrSwXYofEE86o5thVXFdiIc1RsIkixQTXZLYJHDv3VVzRZVyZ5cJc7qo7IhFRP2CLeFu/cNR5sfcuqJ+wbhsNeJgW2J8qHPVVwWZMJHSTk8KISbj2zpdWU9xFWrvVi3ReUROjy3iSwS68NTEMitm1EL1teLCryi2gNc4qQ5wF3ClQCVHnWDq9NqnLMGek0uq023DwEXcFhGG3V/Ck4Q1sX3GpS0kl2MvnGCtq3Yj0r0elU3H1nm/EPLjL0Czq4ppxM6NvJo8nuIsUvbXGUeR+i6cZLaa2ziQV+pIHOvPXRqrltzyenqlOcdzRjukONHWQkARuBWxoKWoeowvFNRieICLEA7nmdq0duDH3uXUuxWYOXYghZM6QNhsBAme6qTgpPLL1WShHEXwD5lYA0kXWcsJbcbHu2/GiTiljDAUWSeU44wDdQx2LNHiTHtVMNhlKKfCLXwLKV0sZJEQY3qqi88F5tY9RK/1oYhnYkce0T+NEbknjIBRrayooKwyaiJYk+O/zo0MN9Ra3MFxEjnmWksGUACAPWq6ivuidDemnF9SvAZNcJmJAoNcGxy+2MFhjD6EycaJtwAjZu6Fd9JFDlgPXlPkps2ooSQw3wV3rO9Wa5KqXAdh9hTcJpIzbqZSkMFwJZNQ4UaK3Iz5z8uWGRyNd2q1XcrrHwhrmQ7A8qJZ+EU0n/dMqlpSTWRh5PX5W0qxWEAqzWEUjLLBRaoaDM0lrKsKcMl8oQWBEF3+sjBWJgcNwRw2PhTCitucCDsl5uzd+xThcDhmbdU0kwDruyJMTEDvmJNVeMZwFxLKWROltWc6FKqT2QTJA5Se+gy6jVa4HeEy/wAKsoZRV3KLPYlwnKqSoCw1iRXhMzWdxQJaXI1HXqPY0OCxts/Zqj8Pb7l14tBDjAZhZRpIMEcYmKT1Hg0rVjIaPjNUepzGPZvXAVGwESRxrY0Gh8ivDPP+KeKebP0CnOMIguLArSjWjDnqZ56izN8MAldOtJE0amUpYBsBlRflXQqTJu1rg+od/wDztX8iIt/6nL3OHIAK7ykd9ulLqFZbh7KI6vpk9/PypTU0yeNpteGayqMX5gibJ7hfsTE7UCdM1HLHatZTKe2LNv0WwLG2Cwkb+sHevCeKWpXNdz22neypAPTzI7SWxfVQr6gCQIkExvT/APj+uunb5MnmODI8XorlS7MepYMVfswEPfJ/d/0r2R5XrkBujehyfIeC9J3TUlclrDhVivcIvMNSb8xVF1Cz/CVYsTcPn4fhVn1BQeEe1aTNV5QR4ksMIzDM0NsLq7Ujaj22JwwIabTThdu7DXotnVkAq7dpmAFBraQzq63LlDXPMGxHZFXmm0AonGL5M/fwbp9YfOguLH42wl0B4qMMvuRwiowTlHCK7kng2eX2owikj7NPUPg89r1mbwJuj1vUbnnRK3ywWsXoQdnNqE9KLPoJ6SX3hjcKe161nJcnqHL0hWMO1dYuDqZrcB2zQYxY3OSNA1z/AKBbB+9djx/SJP8APhTf/tGRhvVpi/LVkLz7Q/zigRwP2JvGAHLyJFBfUbh0NZgeFMwXAhc0pcifOl8Ks+gODWRLhxvQ4rkPZJYNPllkngKYUTPlYsjc4FjtFEjDIpfqowQ5y/ImAB7VF9KMid99jzFMKu5ErMNRE+Jqcrsim61PEnhlGedH16oxuRvtQp2Jmlo6ZJ5zlmbwNxkgaG9jXK+EVyy9vh91r4iyzNMwuqmoWnj9k0CfiVEXt3LPzGdP/jupmt0otITW8ffZDc0MF8QRNBXidbs2J8mj/wBOyjU7A/o/h+tYO3CtGtbuWef1tnkrbE1/0cASOIorSawY1eonGalnoaDoTlqvh9bEyWaAOXaNfLNfp1drLY9NrPsH26Spqx3imZPpdYe7cNgmEWG8/OtXwF1x06sS55ROtjK705wuplM3ynSLcGREH1JPyIr0kLdyMW3TbHwJsTYUMRUlUkDJhHPI0TAruQtxGJZWK91Dc8MPGtNZGuSIbskgnSeQmi1ST6i2pTgvSM7uHtKe1qHmCKZxWZ3mXvoH2uhd26Fa2wCnjIJPpuKrKpdmdDXyWU4tszXSPo/csYhrRAJABkSJBEjalLI4lwa2mu31ptYLOjeSXHxVhdPG4s+Q7R+ANRBeonUS+6lg+9W8i4SKYdqMqOkl3FnS7JVFk1epqbwB1UJUbZJ9z49uCdjxqqisj7se1Mqv3KrJIJXNs+hdAMmt3LKuwkmfmRSUrGrMGpGpOlSHue4MJaYAbAGnqZHntXDDZm8Obhw2HdLSuzM9qYCk6WCp2hBmNp96I3hNlVDdNRfdHMssvcxDW7lsIyo5Kk6odVJHnuBtvS2r1OypSXdpfq8DOl0yjdtfZN/oZ3G5SbTbrG9FhHk6dyawAYtRRJLgFVJpi51oDQ+ptmm6lDllgn62u+F/4g41OPSwefvkU9FrBF6zIG7qfQtt8qz9ZJ+RNo06l95HPfP0M/lSzp9KYa9RVPEWz6P0RBD6AQAytuRuCiMwIggg7R6mm4+kx9V94n7gWZWb1x7zhNk5gbMNJJPLYBTQ9VdGmcYy7l/C6vPqcl2S4GWXYALhBfJBcI7Dbs6hcCKSJ3gGd+dZOo17lqI6SKx6km13TTeP2NKOl8uEtS+eHhPon7g+Toi/zv6Ct9vsjz7rb5Y8TNMOphiQR+qT8qp5mHgn7G5rdgZ2+lmEAgXN44FXHxK0HcpPqNuicI9BHe6QWmuHS2ryp6E1jB52/RWSs3YH+T41boYR4Vma6e1cHqvA6O7LrthAdhXifFNdJLYnye0prS5weu2FKnblXnlZLdnIxGbUjN59pGGcRBiAK2fClKWsiW1smqZt+xk8rxRsQrAiADuCNiJB9jNfToXxikmfK9X4fZfJuK4GOJ6TKsgjgJPMR3yKvLUwQlX4Jc+Rv0Q6Qulu0ix+ka4NTOFUaYbuJk6oG3KvD+N+GvfPVRk1nskfQPDr6p1w0848xXUz/THGX0uu1yFLyqhW1QF7PGBv+daHgsNOtMoV8tdc/EB4jbdC3HZ9PyE+IDtad+sACFViYMwOA57VtbF1Mvz55UfmxNjrwLDSCvZE7zJjc10nHPBFasxy8mr+mqGOwFS2BUTJ9JcA2s3VUlObctR5UGa5yO0zWNo8/o8zNbKXpAkkGN9UQBtVqngBrIOTQ7/pFx9h8Ggtx1jEQBxAmWq1kuAWlr9a4Nb/AEe4y22Gt7yYg+BHEVZvKygOxQsaku406T5ZYa3dum2rXAAAxAJ2FdXJ5WSNRXHa2uos/o4w9pg7si60eAYEjyPrU3S9i2mrx+J5NviMYFFBUcjVlyijM53i1uK5dQdKEr5zTVcduMGRqZq7O5dFwZh8BaTF4bQuzgMQdxwJoWpnKNc2uo94fXGVtafQwvSe0xxN46f7RhsIGxj8KrVGTrj8hq+yCumvifSf6M0Iw1vyPzNZk2/PaNqtR+zRY86SWf0beR+VadLPOa2PLMrlTRgcKTO2JfgSGjrGmCPIUbrJ/IBJ7Yxl3yXZCQ2ZXImCboEmTAJAk0jrY5oiv/KP1HKHnUN/+MvoOOlGTqyHam65ieoo7o+TfRy13R3tFFbyyYrbHJbm+Sm0d+Ymo25WS0bmpYGRAXLsPPK5e283H5iq49LCb15yYLkeI6u4uoEFNJPkCSSI48vek7qnZTOC6s0FYlbCb6Yf0Mxgr+mPCrvrkJnjBseh+basVaTkVu/CxcP4UZTEbqvS38/oNbGZaVxFkk6hbulhx4Wrs+0fGlvFIKex9019UW8EUoxmu2P4ZC5mR/2Sx+6NM+d+03/NWfqaIw11c135/RM1NPZ5uknF9uPoZ7onmbNi7In7R/ytWzCWTKurSjwaLIIZrrEsCEtkbnY9WG7McDI9d6Fr/TW5L+8F/CZOVig+nP1H3TRestqp1DsPxPMXbH4TXlv8ck56hpv+4Zr+N/d6ZzXXj6oy2XYECvbxikeSttb6m76LYSEJ7zWZr05vCN3wdqFbkxniLIG7ECvLarwSyyTnk9FXr6vw5F2aZh1Kqequ3Qxj9EmsqIJ1MAdl/OsSvw2crXW5KLXvxn5DM7VFJ4b+QnzJDirBNu3cQzEXEZG2AM6TvG/GtDQVPS6uO9p/Fck3S82iUV1+ILmlkIDKjUuDSTAnX9I06p7xvvXo5yk9VHDeN3/1MKutKhr4fyydvL7NzFvZ0qLf0ZTpCrya2W5cxcbh31GvvtqqUovnkJpq4uWMccHz/FjErbj9GyI7BRpIftECSSI+yOFaqk5VpvpwZ21QtaXUGH0m9cW215dW66Cs9XqiTuI+PKqQhGvLgks9S091jxPLx0YZjrx+jIhKlldy2mJZiWBY+igeVGjHrL3wLyljEMcLIHeKk7KoAVBtA3CKGJ7yWk+tV2yXcKpQwuCIzKeKzRBVRwVZrnT9V1QEKxkidtvCqzlhYCVV+rcAZZmLI87HaDQ4vDDzjuWAnF5itxwSvAGrZT6g1FxXBfkvSW9hp6uIJmDXRlgrbQrOWa230xxF7DksoALQSJ5D+NMQ/DkQsrSt2ZCOimdXbWrq1DBjLSSPKNjS2o1MKUnIf0+gs1EnseMBeK6eNMG2REg7jYirxs3YwDlo9ud3Ub51mloYc3UVj1irEnYagZ+K0yspJsy0oWTcUsPAqyfMxexOFERoXSfEhT+VL6p/dTfwH/D47bq0/cXZtcU3Lu39o/8AmNO0NeVH5Iy9UpfaZ/8Ayf1CujXSM4UFSupeIjlS92njOW5GjptdOuGx8+w0xvTMXgUVW1EHyA7yeQq0K0ha62cuWizAqqWMNbLFgWa6QARzJD98SxA3EgAxvV9qTyA8yc/SunH/AAD4e7ds3ji9CntPrXUxYqzEsRykDvPKgTpjdHZ7NP8AQdVsqZeY1w8o1d3MUxFrXbMqR6jwI5Hwqqi4vktKSmso+VYm2UxQj7/40ddQL5iMOkOu4yrzMAepomPTwLp/ecl/SIKDh8N9i2BqPie0/qFAHpVZLCL0Sc5NmQtZk7QWJOlmIBPAMQWUdw24eNLRlyasq1gFxuBJxCon9sy6OQJuNp3PLtT5CqNc4DJ+nJpuhOStbxF66+lvo6nhLKX1Fe4clccuJolS9SFNZLdU4onh8IxF287tqZLylWOow+GvXFKmBA2bbwpXW2Y469Pqh7QQUYprjt+wmwts3LItgntErEmNR3Ux5qKalFOGfYVhJxu29mQ6DYctjbR5JquOP1VUg/EgetUr/EX1L21ts1OSX9Iv3QBpKMUHhbLIoM+ANW1Ed0fX0YHRNRm4wXqS6/EedIMS16xh8QPqPrtsNpVtnAP963HqKxfD6NPpNW4V8Z6f38zX10Z3aLEuvV/38hPhrkGvUI8fabTJMaBa8RSNtb8zJs6S+P2faZvPcxuvKy1EssjGOEgGl0lsrN0pNo8c8uWreGWQA95bTlhMW3RyxH63Y5yN+FeWt0kbbpSa5XKPYStcK44/P8gzCYxOrJF249wRJ13yFcsBuq9gAExBEbVSzS3Q1f4Uq/kvb9SIXQlSmpZYr6V5oBicRZhpe0ttRB4riGbs+G/Hwr0UKYuFcvbn9sGC9RJWWR93gX4PpQn0tboBabTWzA3kWbe3Hbe3zpbVaZXRcPjkb097rxKX9wZ3MMeHsqpDf1kxMCNuMHfjTSWIqIBtObkA2r6daOIMA+cSeNVLp9yF9psrsPrcftfa41MclZYfAKkVcESwiazC7mrLkDL08sIzfIryqrFdq6cGdRfHOCfQ/JTfvjUOwAZPjyqlcMsvqbtseOppekvQtg1vqIhjp37zzozr3dBSGr2LMxFa6PEFlkMVMGBtPdXeR8S61mVlrBsL+VnC4TQGALHUywDvHfRFxHCFE99u+QosteQmAu/hNLW6VXJZNSjxB6VtIExeV3Bu8gkz5k70aFGOEK2a7KybW1gQ+HtWn7gu3HsqpH/uH2o8UnLazMum64O6D5M7h7D4bFDSYZW7IbnII3APMGhTojZurk+GN16yUK4XxXKLL1klmLiCzEnukmTHvR4w2xUV2E5XKU3N9+QLExIUcyB7mKiXASp7uRxjLdnC3Ci2xdXskl2YBp4SqxPqfSojJdDrapuO7JrsqtviP04CIYAjtEaV4BRPZG52HfVbWo4RXRqU1L2MZfxR650PZ0XHAIkjcyZXnx766Cy8oPfPEMSb/YI6Oi4bjrZuLBGpgVZREHVsZ4AcqX1mqjQs2L9A2i0ruzsf6g2JsTcW6fOnIwysiFl+17Q/BDrr2rgEgA/rGSSPJQ3wqUscFLJ+nKA8YJXFXWUg6CbZ253EQR/doVliawhzTaeUZRb6YMhleHBB1SIj4yKVhyzWt4Q3y3L3uPhWCybeJSd/sB1ZyfLTPvVmuclFJYaNBkuoLjSu8ueR4LcuM3Luq8eqyLXZcGl7fyKbTEIZ7j37RhMVtuP1jS2ogmm/71Q/pZ8RX96Mz2X3oAAO4YH23Bo8XxgXsj6lI02CwgsjF4lRtdVTa/ZYNduL/wARVQ+VV0+cPPbgr4hJNxiujw/1/rKsmfa5bBkLZZJ722n4/jXah8JexfQw9bl7jbJ8Vqw17DniP0qD9de0PiorzeurnVqq9RHpnDPR0KNtUq31wLHuaSR3EivX1zzFM8PfS1Jr2G+T4s99XbTF1CUWsE8Tj0LRImsy+Syen0Vb2C3O7ylbIP8AvVK8f6yHVV9QTU0V0fik/UB112sc9la9H7/Etwd3EW7b21tKVYln2kkltR3BnjR3Vp7Z5zliqv1tFe1xwv78RRm18vde5dBNyAzGDsG7Q2G0doe9HxWo7fYTUr5S3568i1LBVlKpDHZTv+yRv5x60NqPsMxdnHIA13sjs7EyPPb8xVMx9gyU+mQe5fE8N9O37O/8apvjnoFVc8dSLP2dUbSPjP5Gu3LB2x5Kmu+FRuJUBt0dy4LiNLypVoYdxHEVaEcMBfZmJsOlDqyBQdo75orWUKVNReTLZPdOHaUqkY4GbZKfU1q5y90JOwXf1jamq4cZMjUT5SJ2QFCsAN5JMTvHHfnJqZRx0Ooscs7ueSef22ZltliddlWkj7TTI28h70rRZ5kW37tD90PLnHHdJgmVYYwpPa4ztEaTBn1pqEko4ENRXNz3LoMc5ww6xWYn7J0xwBEzM78KrXLKL3QcZYz7F17HNatPdWNSRuRx1BEB9p+FD6WJ/MNKPmaeUO3BhbWILXtRMkmT7zUx5nkvNKNGxGrx2HZ3VNLS6BlHpxHtXfaa9rlnhFY+H274xxy1knhujA6pbjNudTD+4fq+HChTvSTb7DVekbain16BF/KiX13bTHbgHSOG3OsP/qTSv8KZtV/49fL/AFr9GNsuzpcNbNs27hhSx3t7Cf2qtLx2m15UWdR/jF1Mcb0IFya6125c0iHctBIkSZ5Goj/k2lh+KL/IDqf8Y1ElhWL9GewmDvWWd9MbEkhl+qphufcSKi7xvSajCw//ANDaTwLU6XL3J9Pcz+Z4plAg7QK9CpvB52Wnju5NflmG02gCCG6sFvBnXW/qFCD1orl6ciDq+9UPiAdLwOphCezbhu4lmXb0gUnjbFm7v32xx0XBj8hUao72B/dM/nQoMatXBp8vZrNxiYgXGaN/ssxO0fcLj1o/VCb4fJbgoXDXN23LySILCBynhvx8au0k0LqbcZfATXyOrbTI7h/5d43n9egzHaMrHz/hiTAWDJUgTHMkR7eYroLnBNr4TNViVKYHQN27P/qObm3pa/xUeS2RM6uXnX5/IRdGLpBcnhpb5ilWtyNaDUJ/k/oG69NwEcCu/ufzoN1eY4GtNdieQYtG0zG3oOHwimqZ5gjN1dW26SGOUXNjR4vKEpxSaFTq/Wk78azrovJvaacdpfnN+FseGIQ+y3K7bwdKzMsDnL8wliJo+mjiYn4jZuowLOkcdef/AAtn4/6UWb9TFaI/cx+S+iBMLc0vh2PDriPYqT/nWq9eA6wufmKkUi1H3b0ewj86q+haP4n+QAw7a/8Adv8A/JQu4d9Dzf1Pqvzep7Ff9RQ38+1ScuhoRfOpn21EkkxxJ405hLkyG23gJwmILDSSAAOAAG/pXQeXgtfBRhuLdA8Pai4FHMtXEsBAiPIVDk0TCmM+WXf7RuREiO6B7VR2Nh46aEehb9OfbhwEbDlt+AqFLKLSpSeQjB5hdWQpidU7feMtU8FWvj1LLmNvNJMnhuRO0GPSu3beCPJU+XlluHvXH7DAlSQG7O224nbbcCu3LJHk4i8ZDcJhLe8BeG8aeAPOpbZWMFgaW7naUg9pRCnaQOEChOEcNNcdwvmz3JpvK6Hb90qpnaVJHDcGZjzIqtqi65Y9mWpnZG6G7u19QrMW4eQr5RUfT6F1MvnV49YVH2ren3b+Faumj92m+zCT5wjU4Mfz71lWgrQK8ZR/2L3+anKl64/OIOz8LMjfsW2u2we0oILAc1UgsPWI9a+kXXxqr3S6I+f6bTTvu2R6se389tGQdalo4BWH6XtgAzv2dHvSsvE0opKDecDUfApOx2OaWMrp7cC/GYFrysEYkMgO+kfbBnj4Und47SsxlFrsO6b/AB+6OJKaZnMKtuzeXUXBUnVsDJ3G0Gi1a2M47oxL3aCUXtlJDxFXUX3JUFSIB3uldJ2I7o9aheL1qWNr5Ky8DtlH8aLsJiC+GMEmVdBPGNKkbd0RWlTdG7GOzwZGq00tNndynHIP9AOgApPDnH9iFnj37UXZl4AeeoxUs9/4KbeRh7iqLelWImWJMTDHY8hV41L2AW6zjhjrPsOOAmDcIEf9WotD4qx/vVeSyhTT2uM8LsZC5Z6lnA4FdQ8mI29DI9KWjHBsznuwysMzAnbsbntD7W23tzqZRyiK7HBkMUSrEGOAO3iP4ChxW1YDWy8x7mG5TiwnGjQlgUurb6BF7MLZPKpntZFLnHgTZ1iAyrHK4p/wvS810HYNs9gMXoMzRE8MFNb44Ybn1/UwbvwuHPwf8xUN5ZZR2wSAcRfAtpHEXWbyEW/yPtXLqVb9OPmU4n7Y/wC1sPi35VRhV1fyALAm6g71Ye+sfjVEvUEb9OSoH9BP6w/5qn/SVz60VmuJQ7u3tKfV1FiB+zABJPtTecRMxQ32dcJFmExkNwg6GIPKeQ3qIywy9tW+KXxQRhMRM6iKmubcuSt+nSh6TrMCTvy/A1E3l8FqI4jyMb9+R6sfcJ+VCiuRmbyi1Lkjj3USAC95CsI8HiP9aOkZ858LgMa+IbtDcAfWH63j5UvbHlD2kn6HwHZNeBN0SDJciCDwUHkfEUC6aTjgb01Ump5XVizKsPP0jv6q5HmGFFtt27c+6FdPp9/mY9pfUYWcM3WWlkAmzqM8dncz8BULURxL5l/sM1KGOPSSxZW6tshtxaA9VLk/Oh7ttdue+foElTuu0+O2P2Y1x7SR/PKvmFS4Po9KwhJfw2vEKe6J9Gmn4WbaWi7j3NJgx86zLOgtaLG3Vh3rfH+M1o1fjh84lbfwv+9jLDCgQATLlUnuDNufQBj/AHDXtvEkrLK6F82eR8GcoV26mXyj/fnwKvpWu9r4Al3A7pVtI8gAPalksyc38TTlxGNa+H/JtskEp/dUcDxA33rymsfq/N9zfgsRRkM8wsXj5/jW14fb92Z2srzLI2wY/TMh2FxdP+EEHz2pO9+ncuzH61jqRy23pu3Ebb7UcjPH0GvT6Vu+F35sh7Pj80eb8fpS0tnullfJjSwsm5+qQOPAdUjD4tXoY2PzXE8dZRH7Ipv2/g7h8WlluscEhQSIE9qOyPUwPWmrOhj6aDnIEzHPbS6bbMAVHMpu07ndpmRQXKKNCrTWP1CjEYpLgMbyNIjmZERE+1VlyuBurdB8i85YNQEMDB1KUcE85PZ4bGquoKtSuvH6oFv4Rxpi2eyu7STInjLATxHKhqprsFeoi/8AUB3WrpRLQs9yrVQ8BdyC7WXNcTUCsTzJnYEch4ireTKaygUtXCqWJZJtlFz7ye7f/WieRID9tr+IRj8IzaQGXbDWrZJn69s78uH51VUSCS1tbXGQZ8GSpEgGTHGNzx2HLau8to5aiDI37UnlviRc/uwZPuaq62EV8f2AcNbIu2yeCzP7xP40PY9wV2JwaRR1ZFgL9rUD6b1Lj6cEb82Z7FTqZ4VRoLGSwN/oqBFYFtRkEcvqt4U3sSjkzlbJzcexVIgbnhA8eNAyhva0TYgCfD5ia4tydW6PhPwqSvJ5cTx2qESw21c+dXQKSy8B2Dffl7Dbht8amDyUtgkkWYvEBVYaRwEbbgyDO3lQ7lNtbffn5B9K4JPd7cfMO6LY0ktvJ7Q9NA8O4CgXQyN6e1Lr/egwym6y3hrBUPqI7P1l1Nw9qtdXvrwgWmu8q7L4y2EdIsWDiLZRjpNggHvkkkUHQ1NQkpdchvEL15sJR7p8ipb4C29MhtLavEy0R6EU3OEtlufbj9DOjbHzaNvXPP6lt/OyG3rwMNInHg+kK9ReC3AZ6oJLcyY96rbpJNYiW86LWGOcLndvbekrNJPkrJRa4ZQuMUhjPO98WBHzpumtqyGfeIO5Zrkl7fwZrH4ggXCDsLbad95uxaQR36C7+9etVm+2dj/ueh51U+XRXSv7jl/uZ+w0NMcjHnEfiapKxbWkGhU9ybNz0bxxbshYHEnv4CvK66rHLZ6CuW5dBH0iufpSf1vxrQ0H4MC2p65GKWwSrA7ggjjt8d6Xsk03HA1XHKTKsxS4sX1I1ByG5SB2wD4dp/jTugvjCaj+a+Yh4jp/MhKPuv2JnEkMxU7Oy84MdRYYfz416+r13bvzPB6mPk6RVv5FOb4wLbHfrUx3wZI+Ap62WDH0dXcxmavquHeSDE/siD8QTSU+WbVS2xwMcnvSkfdOr0FHrfArdH1N/Af469FxWG/EGPCCf81NN8ozYQ9LTObG2B4spHg26nyk/CqvlYLL0zyYfEtcVmUrwJHpyrOk5J4N2Ea5RTTKesb7pqm5hNkfcvTEOEb66gEcCRuZ/L4VEpyRMa4N84ZWcyf7z+7VbzWV+zx9kMcdi4tC4twySvZkzARQx/fJ9qu5vbnIKNUXPbhf3/gqxGLg2yHldSh/KFnf34VV2P3LwpjysEb2JCoh1amOrUNtgDAnuJqXYVVOW+MATYttj4mdvL86G7HkOqI7TxxPDhxqXYQqjl69B23H8ahyJUMoa38TIBkkg8PQju8aanPKEq6sMEF7aNPPbal93wHNue5Yt893w8IrtxDr+JMmRuPwqckbcMus2lP8mrRwDsckHWUEH4DefOipJoXnJphVjarRwgNm59D2IPCNzvPDaI4yKiWOxaCeMMlhLkEEtpM+AjbwHfFVWM+oJNS2NV5yMVNx9LC5MSAdUwDMgd3E+9E9GOBVu9PLzkPw2rSisyFbf1QY276iFdMZOSXL6lbb9XZGMH0j0KmwqaWIuW50nSAw4wdq66UFCWPYtpoXu6ty6Jr6iB8vvuQRpI/bT868h9qoXDX7H0j7Je+U1+p3CYG71i22UgmI3Gnfx4UG22twc49AkKrIvEjWZbkrwJUfvL+dY12qjnr+w16Yrk5isGVS5IjsMw3EneAF8SZ9polU8zi/ijpNOPBlLuMF5urBCkvxgR2RpQETIiW8q9BKbjXl/MzYwjKzjssCm4LgvPbIUlWZSeElTHOrejYpe4P173E+hZFYW2FYlJI7UNPzrzmrnKxuKTwunBsQilH4mZzy8OuYDtdqRAkcZ38K0tLCSgm+Be+SztGtzC3AV2ZRpBJ0z58Dv6Uu5weegeHCI9bNtmDakCy50kAFSdMk8JBYDyNco4ko4w+xM7IsjaujqkAiQCWI8WOnfv0hR6CvY+ESb6+38ngP8khHpH/d/Bm86xrdYJXYE+pnYj00+1aFsmnyZulhFw4Yqu21IBVtzxEH50FpPoNptPlDTJGHaEb6G3APd38vOjVPCwLXrLyhu2+k6tiSZO5PZEzHtTIh3eeoxtEMq6bZ1Fgqnl4ifb2qXIX2uMuXwZvN72m9cXQDDESOEjYx60rKXPQ066/SvUBPfHNAPMiqOS9gihJ9GQvsrKIKjtDn3T4VSaUksBqt0G856BYwls/aT3O/wouyIt5012YsZWiNvLbvoDTHE0UYpDwgRM7elUmg1bXUrZV/3fxNRx7E+r/cRvKkgCY58e/eqyS3LBeDlteepQ7Cdh71VtZLxTxycJriVkKF/b/Si7+BdQ5I9aaHlh8IkrnuruTvSWqWqcMjdEut6qlJlXKITb1VZJlHOITb1VbDBuSLiDBkkQQDt94MRz/VNd3wQstZwet4cs2nV3j2qMJl97j2GOXYN27CmTt8SB8yK5zjXHLK7JWywuo1fKWt31sufrIXJHKFY/NarXqYzqdkfcrZpXC5VSfVZKMOzaQwbi0fCmpZcZfIUrcYTg/dhuNygKx7WrxIFed8qFiy1ye1V86/Snwdy/AAtsQPSszXxjTDI/prXN8mkwmXTsXuejN+decnqWucL9BqySXYWX8CsOJ3Ctx4HTtwrU0uplGcJxXVpfqCvjGdbUumDEY7LQXJUwecc+/YivUSpb6GLXqEsZbz7g2Ly5n3csWgDVtJgQC3ft6+NChXOPCxgPZZXLrnIA2Ut3n2H50TEvYBle5dhcucMCC37oP41SxZWMBauJZTNbbvsSquYWADptIPs/aMn5GO48Kxnpny0v3NV3LAvvXneFcnQDsu0esDetDT6OKeWI6jVS2vb1DLGXKwLGUB7idzJnn5V6KqKXETyGqnnmfPPcT5patzpktB4yaZceOTPjY8+lC76Kg4A+/8KrsQXzWy2yhA2AIJ7+dXSa6A5STfIxw9q9pkIoB/WHLw9autwGXlZ5YywL3ShTZeQbUkKTvx0yvPeedX5YGUYJ5QhvWgCwKkFTBEj8qA8DSb4wZrNh26St6mvp+IgM0IYwd6w95rtzO2r2Pdae8125nbEd65u+u3MjZE79IbvrtzO2RPfSDXbmdsRw3zXbjtp43vCu3E7T1WK4Ohq47BYt099dllWkXW8WwqdxG1FtvF1ZTKusKt44c6upoG62FWsavfVsoE4yQQMQpDb8WT4C4D8xVJfiXyf8BIfhefdfyE4J11kz973J2qV0Onyx50axCq90k7C1Ptfs0prk3CKXd/wwujlttbfs/qjQ4zGo+N1LBHUFQfRj8qWphKvSJS/wByGZzVmtUl/tZlbN2LQ/a/AVvZ4fyPOOLzH5mlzIHc+FYEZo9q4vqC5PfhqyvF4OVWUaOgfOGaLD4yDXlp18GlOrIpxDyLh/UuH/GfyrV0q221p/7l9BfU/wDaePYyi3Cp2jjP8mvXWxTWGYFDxLg86F2LE8T/ACPKgQkq4qK7DUq3Y9zGtvKUCBiJnvrKl4jOVrrXCQ/DRVxhnGQTEYBV3+E7eVO0anzOBa3TKHKIXrpIVRIgQd+PjRIUxUnJ93kHK2TSii7BWGYFTJBE8phZJAMSJql04xakuvT9S0K5NYYZmOHKWUE/Vc/4kRyPTVW1pJ7sHmvEqtsZN+/8GTxy9o7Rv/Jp+XUxqn6UBM0VTIZJMLwd0xG3fV4yBTjyMMFjgpB7W0wBH1ojeeVFUhedeTovltKKYM8THPj6c/CqWWYQSmlylj3KLynU2oyTuT5gGPwjwqkXuWS9kXCW0zmYKQ1LTXJpUvMQFrY7qE4oYUmRNgVGwlWEDYqNpbecNio2k7znUGu2HeYiJtGo2stvRHqzUYJ3I5pNcdknNTkjB2pyQdFcQTFcRg6K4sdqTjoNcQSDnvqckYRYmKYc6nJDggmxmjrMHiIPlIb5qKhvOM9iFDGcDLLekRRwzSYBHj9UgfEih3pzg4ovp4quxTfY9g84UCG4T+FMOzh4Fo6dbk37mtu9J7VwcRWMtPOLPR/aISQLgMwTWIND1lMpVNBtLbFTQ7bGAAma85HTyclHBtOyKWcg9rHDQ5n+yf4sxp+Wnkro4/3L+BKVilW3/e5n8ffAbY7bEeRH8a9K1mJ56EsTOYbFUrZA0KrDWYC5rsweXCvMaut13b13NupqUcC/NGAWn/DYvORfVtbSm9h/0oQc4HuN60K7HOvc/iJSgoyHOSNbV+2YXge7iJ+MD1pBRnqLq4r3CauxafTzn7Ij0kYBXG218jw/qLfD2r1lKULmkeOvm7tHGb6v/kxuLgk+Kn3Ug/Kaen1MmnKWBVdO9BY3EPy0KUuTxAUj94A/OrwBW5yV3DDR3Gpb5IUXtyFm4qrI+sQw/fkR+7PvS025Tx2NCuEIUqXfH1PWUkU0uhlSy3kX4y1vS8+ppVPgFuoIG3Oh9xh9C/MrSDgBRWkLQbFToKHhBVJlLCqtBItnhUI5kHqGWRGoLEKguVUMueipOJ2xvXNnJFtxd9qhMmUTgFWyUweqcnYO12Tj1dkjB2uycempOPTXEnq446DUHFiXmHAmoaTLKTXQJGaXYjUaH5UM5wG+0WYxktt5u4ETtEem/wCdVdUW8l1qZpYI/TSeNFAp8ltjGwaHKOQ8LMGpyfOlCMCeS/Db8az9RpFNGpRqsYKMyzIEGDyq2no2cEX37gvEZjpvM0/VkesRVaK80orZZ68AVzFsynfYAk+JBWR6FhTulpjXKLwZ2vtdtckFYvGdZh5J/tX97eCT5lfjTc5bbG/71M6qpSojD2/hMz2Gv9oTTUZciFlTxwduWBrKzzIB74PGrYywe5qOQ1MuK22edtl8wT/+as4YQJXqUsFV/AEAtxFc68ckQvUntBVbehxXIzOT24GeBxIiDVmwcYlWMINAnnI/VtwK8YIArscHZ5aB710njU5K4B2NQyUiDCql0cqCcEDUMnB4iuJIGoLH/9k="
          alt="Precision Solutions Industrial Refinery Night View"
          className="absolute inset-0 w-full h-full object-cover object-center  mix-blend-luminosity select-none pointer-events-none z-0"
        />

        {/* Professional Core Overlay Mapping Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#091624]/95 via-[#1b3a66]/80 to-[#2D5DA1]/50 z-10" />

        {/* Slanted Angle Bottom Cut Effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white z-20 origin-bottom-left"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 0)" }}
        />

        {/* Content Box */}
        <div className="container mx-auto z-20 relative max-w-6xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-5 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Precision Solutions for <br />
              <span className="text-emerald-500">Industrial Excellence.</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg font-normal leading-relaxed tracking-wide max-w-2xl">
              Advanced chemical distribution and manufacturing services designed
              for safety, sustainability, and technical performance in the
              global market.
            </p>
          </motion.div>

          {/* CTA Group Exactly like Reference layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              to={"all_products"}
              className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide rounded-xl shadow-lg transition-all flex items-center gap-2 group"
            >
              View Product Catalog
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to={"contact"}
              className="cursor-pointer px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-white font-bold text-sm tracking-wide rounded-xl transition-all"
            >
              Technical Support
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. INFINITE ANIMATED SLIDER (TRUSTED BY GLOBAL LEADERS) */}
      <section className="bg-white py-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center mb-8 px-4">
          <h2 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-blue-900/60">
            Trusted By Global Leaders
          </h2>
        </div>

        {/* Slider Frame */}
        <div className="relative w-full flex items-center overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-32 before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:after-top-0 after:bottom-0 after:w-32 after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          {/* Framer Motion Infinite Sliding Track */}
          <motion.div
            className="flex gap-8 whitespace-nowrap flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35, // Adjust speed here (Higher value = Slower)
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 0 } }} // Pauses smoothly on hover
          >
            {duplicatedClients.map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl shadow-sm hover:border-[#2D5DA1]/30 hover:bg-white hover:shadow-md transition-all group cursor-pointer"
              >
                {/* Dynamic Icon Allocation based on data structure */}
                <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:bg-blue-50 transition-colors">
                  {client.type === "pharma" && (
                    <Beaker size={18} className="text-[#2D5DA1]" />
                  )}
                  {client.type === "university" && (
                    <GraduationCap size={18} className="text-emerald-600" />
                  )}
                  {client.type === "institute" && (
                    <Building2 size={18} className="text-amber-600" />
                  )}
                </div>

                <span className="text-slate-700 group-hover:text-[#2D5DA1] font-bold text-xs tracking-wider uppercase transition-colors">
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
