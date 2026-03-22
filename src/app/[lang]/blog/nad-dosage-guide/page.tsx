import Image from "next/image";

export default function NadDosageGuideArticle() {
  return (
    <section className="px-4 py-10 mt-[4.5rem] bg-gray-50">
      <article className="max-w-7xl mx-auto">
        <Image
          src="/assets/images/articles/nad-dosage-guide.webp"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full h-72 sm:h-[500px] object-cover"
          alt="nad dosage guide"
        />
        {/* Header */}
        <header className="my-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg_gradient text-white px-3 py-1 rounded-lg text-xs font-medium">
              Dosage Guide
            </span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            NAD+ Dosage Guide: 100mg vs 250mg vs 500mg vs 750mg
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Not all NAD+ doses are created equal. Here's how to figure out which
            tier actually matches your goals — and why getting that decision
            right matters more than most people realize.
          </p>
        </header>

        {/* Body */}
        <div className="space-y-6 text-base leading-7 text-gray-700">
          <p>
            Once you've decided to try NAD+ therapy, the next question hits
            fast: how much do you actually need? Walk into most IV clinics and
            you'll find a menu with 100mg, 250mg, 500mg, and 750mg options — and
            very little guidance on what separates them beyond price.
          </p>

          <p>
            The truth is that NAD+ isn't a one-size-fits-all protocol. The right
            dose depends on your age, how depleted your cellular reserves
            actually are, and what you're trying to accomplish. Here's a clear
            breakdown of each tier and who each one is genuinely suited for.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            Why Dosage Matters in the First Place
          </h2>

          <p>
            NAD+ is the coenzyme your mitochondria use to convert food into ATP
            — the energy currency your body runs on. It also powers sirtuins,
            which regulate how your cells age, and PARPs, which repair damaged
            DNA. By your 40s, your natural NAD+ levels have already fallen by
            roughly 50%. The goal of IV therapy is to replenish what's been
            lost.
          </p>

          <p>
            But filling a slightly low tank is a very different job than
            restoring a severely depleted one. That's exactly why dosage tiers
            exist — and why matching the dose to the actual need is what
            separates a mediocre session from a genuinely useful one.
          </p>

          <p>
            One important note before we get into the numbers: the doses below
            refer to direct systemic delivery via IV or subcutaneous injection,
            both of which have 100% bioavailability. Taking 500mg orally is a
            completely different situation — the digestive process destroys a
            significant portion before it ever reaches your cells.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            100mg — The Beginner and Maintenance Dose
          </h2>

          <p>
            At the lower end of the clinical spectrum, 100mg is rarely used as a
            standalone IV drip because the physiological effect is relatively
            subtle at that volume. In practice, it's most commonly delivered via
            subcutaneous injection — a small shot just beneath the skin, often
            self-administered at home between clinic visits.
          </p>

          <p>This dose makes most sense for:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-gray-900">First-timers</strong> who want
              to test their body's response before committing to a longer,
              higher-dose IV session.
            </li>
            <li>
              <strong className="text-gray-900">
                People in their late 20s or 30s
              </strong>{" "}
              who haven't experienced a major NAD+ drop yet but want to
              proactively support cellular health.
            </li>
            <li>
              <strong className="text-gray-900">
                Maintenance after a higher-dose protocol
              </strong>{" "}
              — weekly 100mg injections to hold onto the gains from a 500mg
              series.
            </li>
          </ul>

          <p>
            What to expect: a gentle, steady lift in daily energy and modest
            improvements in sleep quality. No dramatic shift — more of a
            consistent background hum of better baseline vitality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            250mg — The Sweet Spot for General Wellness
          </h2>

          <p>
            For most healthy adults walking into an IV clinic for the first
            time, 250mg is the right starting point. It delivers enough NAD+ to
            produce real, noticeable systemic benefits without requiring you to
            block out half your day in a clinic chair.
          </p>

          <p>This dose is well-suited for:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-gray-900">
                People in their 40s and 50s
              </strong>{" "}
              looking to counteract the natural decline in cellular function and
              activate longevity pathways.
            </li>
            <li>
              <strong className="text-gray-900">Frequent travelers</strong>{" "}
              dealing with jet lag, disrupted sleep, and the cumulative drain of
              constant time zone changes.
            </li>
            <li>
              <strong className="text-gray-900">
                Anyone in a high-stress season
              </strong>{" "}
              who needs a faster return of cognitive clarity and focus.
            </li>
          </ul>

          <p>
            A 250mg drip typically runs 1 to 1.5 hours. Most patients report
            feeling noticeably sharper and more energized within 24 hours. It's
            a strong return on investment for general optimization — enough to
            feel the difference without the intensity of higher-dose sessions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            500mg — High Performance and Deep Recovery
          </h2>

          <p>
            At 500mg, you're crossing from general wellness into targeted
            cellular repair. This is a clinical dose designed to push your body
            into a state of active regeneration — not a tune-up, but a genuine
            overhaul.
          </p>

          <p>This tier is built for:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-gray-900">Elite athletes</strong> who need
              to clear lactic acid, repair micro-tears in muscle tissue, and
              restore ATP production after extreme exertion.
            </li>
            <li>
              <strong className="text-gray-900">
                People with chronic fatigue
              </strong>{" "}
              — including Long COVID, autoimmune flare-ups, or severe burnout —
              who have run their cellular reserves down to near-empty.
            </li>
            <li>
              <strong className="text-gray-900">
                Pre- or post-surgery recovery
              </strong>
              , where accelerating the body's natural healing processes makes a
              meaningful practical difference.
            </li>
          </ul>

          <p>
            Expect the drip to take 2 to 3 hours at a properly managed pace.
            Pushed too fast, a 500mg dose will trigger the "NAD+ rush" — chest
            tightness, nausea, lightheadedness. Paced correctly, the experience
            is manageable and the results are substantial: dramatic clearing of
            severe brain fog, a real resurgence of physical stamina, and a
            neurological calm that tends to last for weeks.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            750mg to 1,000mg+ — Medical and Neuro-Rehabilitation
          </h2>

          <p>
            You won't find this tier on a standard med-spa menu. Doses at 750mg
            and above are reserved for specialized medical protocols —
            specifically severe neurological repair and clinical addiction
            recovery.
          </p>

          <p>
            Chronic substance abuse — alcohol, opioids, prescription drugs —
            depletes the brain's natural NAD+ stores at a serious scale.
            Flooding the system with high-dose NAD+ allows clinicians to repair
            damaged neural pathways, clear accumulated toxins, and significantly
            reduce the severity of withdrawal symptoms and cravings.
          </p>

          <p>This level of treatment is appropriate for:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-gray-900">Addiction recovery</strong> —
              patients undergoing medically supervised detox from alcohol or
              chemical dependencies.
            </li>
            <li>
              <strong className="text-gray-900">
                Early-stage neurodegenerative conditions
              </strong>{" "}
              like Parkinson's or Alzheimer's, under strict medical oversight.
            </li>
            <li>
              <strong className="text-gray-900">
                Severe traumatic brain injury
              </strong>
              , where the cellular energy demand for healing is exceptionally
              high.
            </li>
          </ul>

          <p>
            These sessions run 4 to 6 hours and are typically delivered over
            consecutive days. It's a heavily medicalized process — and the
            results reflect that level of intensity.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            Pacing Matters as Much as Dose
          </h2>

          <p>
            Whatever dosage you choose, how fast the NAD+ enters your
            bloodstream is just as important as how much you receive. NAD+ isn't
            like a standard vitamin drip — it immediately forces your
            mitochondria into high gear, and if that happens too quickly, your
            body reacts.
          </p>

          <p>
            Drip a 500mg or 750mg dose too fast and you'll likely experience
            chest tightness, shortness of breath, nausea, or a wave of heat.
            None of this is dangerous — it's a metabolic response, not an
            allergic one. A trained nurse manages it by simply slowing the drip
            rate, and the sensations typically resolve within 30 to 60 seconds.
            This is why higher doses take several hours: your cells need time to
            process the influx.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            Quick Reference: Which Dose Is Right for You?
          </h2>

          <div className="overflow-x-auto rounded-3xl border border-gray-200 mt-2">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3 font-semibold">Dose</th>
                  <th className="px-4 py-3 font-semibold">Best For</th>
                  <th className="px-4 py-3 font-semibold">Time Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">100mg</td>
                  <td className="px-4 py-3 text-gray-600">
                    Beginners, proactive maintenance, post-IV upkeep
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    ~5 min (injection)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">250mg</td>
                  <td className="px-4 py-3 text-gray-600">
                    Anti-aging, brain fog, jet lag, general vitality
                  </td>
                  <td className="px-4 py-3 text-gray-600">1 – 1.5 hours</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-gray-900">500mg</td>
                  <td className="px-4 py-3 text-gray-600">
                    Athletic recovery, chronic fatigue, intense burnout
                  </td>
                  <td className="px-4 py-3 text-gray-600">2 – 3 hours</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    750mg+
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    Addiction recovery, neuro-rehabilitation, severe decline
                  </td>
                  <td className="px-4 py-3 text-gray-600">4 – 6 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 pt-4">
            The Bottom Line
          </h2>

          <p>
            If you're a relatively healthy adult dealing with the general
            fatigue and cognitive drift that comes with aging, 250mg is the
            right place to start. If you're running on empty — whether from
            athletic overtraining, chronic illness, or prolonged burnout — 500mg
            is where the meaningful repair happens.
          </p>

          <p>
            Either way, high-dose NAD+ IV therapy should always be administered
            by licensed medical professionals who can tailor the protocol to
            your baseline, manage the drip rate in real time, and make sure
            you're getting the most out of every session.
          </p>
        </div>
      </article>
    </section>
  );
}
