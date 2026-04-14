import { openingHours, socials } from "../../constants/index.js";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        toggleActions: "play reverse play reverse",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })

      // the leaf animation must reset when the section is re-entered
      .to(
        "#f-right-leaf",
        {
          y: "-50",
          rotate: 10,
          duration: 1,
          ease: "power1.inOut",
        },
        0,
      )
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          rotate: -10,
          duration: 1,
          ease: "power1.inOut",
        },
        0,
      );
  });

  return (
    <footer id="contact">
      <img src="/images/blueberry.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/mango.png" alt="leaf-left" id="f-left-leaf" />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Us</h3>
          <p>111 Washington St Suite, NJ 07030</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(444) 987-6712</p>
          <p>mail@thesilkshake.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
