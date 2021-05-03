import React from 'react';

const Faq = () => {
	return (

		<div id="faq">

			<h1>
				<b style={{ color: '#0acc94' }}>Frequently Asked Questions </b>
				<i
					className="far fa-question-circle fa-lg"
					style={{ color: 'green' }}
				></i>
			</h1>
			<h3 className="faq-h3">&bull; What is Mental Health?</h3>
			<p className="faq-p">
				A mental illness refers to a health condition whcih hampers a person
				mental state( Emotional, psychological, behavioural). Just like a
				physical illness, a mental illness also requires professional treatment.
				Unlike some physical illnesses, mental illnesses are caused by a
				combination of biological changes, psychological factors, social and
				economic circumstances of a person.
			</p>
			<h3 className="faq-h3">&bull; How are mental illnesses treated?</h3>
			<p className="faq-p">
				Mental Illness is treated with a mix of therapy and medication depending
				on the intensity of the illness. Some may not even require medication,
				and can be addressed with psychotherapies like cognitive behavioral
				therapy.
			</p>
			<h3 className="faq-h3">
				&bull; What are some of the warning signs of mental illness?
			</h3>
			<p className="faq-p">
				Symptoms of mental health disorders vary depending on the type and
				severity of the condition. The following is a list of general symptoms
				that may suggest a mental health disorder, particularly when multiple
				symptoms are expressed at once.
			</p>
			<ul className="faq-ul ">
				<li>Confused thinking</li>
				<li>Long-lasting sadness or irritability</li>
				<li>Extreme highs and lows in mood</li>
				<li>Excessive fear, worrying, or anxiety</li>
				<li>Social withdrawal</li>
				<li>Dramatic changes in eating or sleeping habits</li>
				<li>Strong feelings of anger</li>
				<li>
					Delusions or hallucinations (seeing or hearing things that are not
					really there)
				</li>
				<li>Increasing inability to cope with daily problems and activities</li>
				<li>Thoughts of suicide</li>
				<li>Denial of obvious problems</li>
				<li>Abuse of drugs and/or alcohol</li>
			</ul>
			<h3 className="faq-h3">
				&bull; What is the difference between a psychiatrist and a psychologist?
			</h3>
			<p className="faq-p">
				While both psychiatrists and psychologists are mental health
				professionals, the big difference is that psychiatrists are medical
				physicians while psychologists are not. Because they are licensed
				physicians, psychiatrists can prescribe drugs. Psychologists are not
				allowed to do that. Psychologists on the other hand, use psychotherapy
				as a treatment method.
			</p>
			<h3 className="faq-h3">
				&bull; How I can cope with the stress and anxiety I’m experiencing
				because of the pandemic?
			</h3>
			<p className="faq-p">
				Negative thoughts, such as predictions, worries, or even catastrophic
				thinking, are normal when we feel anxious. The key is addressing them
				properly, and there are three basic strategies.
			</p>
			<p className="faq-p">
				First, ask yourself if your negative thought is realistic. To bring your
				thinking more in line with the facts, seek out information from a
				reliable source. Of course, if the situation is unknown, searching for
				answers isn’t a good use of your energy. Sometimes, recognizing that
				“only time will tell” is the hardest but most effective strategy.
			</p>
			<p className="faq-p">
				Second, see if you can challenge your negative thought with a healthier
				alternative. For example, instead of saying “This is awful,” try “This
				is a challenge, but I’ve overcome lots of challenges in my life before.”
				Just make sure you don’t replace negative thoughts with unrealistically
				positive ones.
			</p>
			<p className="faq-p">
				Third, try to use gentle, more compassionate language with yourself. In
				other words, talk to yourself like you’d talk to a friend. Be aware of
				your negative thinking, but don’t beat yourself up if you don’t conquer
				it every time. Consider saying to yourself, “There’s that horrible
				thought again. Oh well, it’s reminding me to be concerned. I’m still
				going for my walk to take care of myself.” Sometimes, turning our
				thoughts to others is the best remedy.
			</p>
			<p className="faq-p">
				Humans are social animals, and we all need contact and support. Send a
				few “Hi, I was thinking about you” texts or emails. You might just find
				yourself feeling better as a result.
			</p>
		</div>
	);
};

export default Faq;
