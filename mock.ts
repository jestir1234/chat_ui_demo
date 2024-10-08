import { v4 as uuid } from "uuid";

export const dbzPhrases = [
  "Kakarot, how’s your training going?",
  "I can't believe Frieza is back again!",
  "Did you see Gohan’s new transformation?",
  "I’m really looking forward to the next tournament.",
  "Have you tried training in the Hyperbolic Time Chamber?",
  "What are your plans for mastering Ultra Instinct?",
  "I’m so tired after that fight with Cell.",
  "That sounds like a great strategy, Vegeta!",
  "Can you send me the coordinates to King Kai’s planet?",
  "I completely agree, we need to power up more.",
  "Let's catch up after we defeat Buu!",
  "What do you think about Goku's new technique?",
  "I need a Senzu Bean break.",
  "Did you hear the legend of the Super Saiyan God?",
  "Thanks for the update on Frieza’s location!",
  "I’m really excited to face off against Jiren.",
  "Do you need any help gathering the Dragon Balls?",
  "Let me know if you sense any unusual power levels.",
  "I’ll get back to training right away.",
  "I appreciate your help, Piccolo!",
  "It was nice sparring with you, Goku!",
  "That’s exactly what I was thinking during our battle.",
  "I’ll be at Capsule Corp in 10 minutes.",
  "Do you have any recommendations for new techniques?",
  "I haven’t seen Shenron in ages!",
  "Could you repeat that move, Vegeta?",
  "I’m running a little late to Master Roshi’s training.",
  "What time works best for a sparring match?",
  "I’m so glad to hear you powered up, Gohan!",
  "How was your time on King Kai’s planet?",
  "Can we reschedule our training session?",
  "I’m heading out to train with Whis now.",
  "That’s such a coincidence, I was just thinking about training!",
  "Where should we meet for the tournament?",
  "It’s been a while since we fought together!",
  "Let’s keep in touch through King Kai’s telepathy.",
  "What a beautiful day on Planet Namek!",
  "Are you free tomorrow for a sparring session?",
  "That’s good to know, we need to prepare.",
  "I’ll see you soon, Vegeta.",
  "Did you get my message about the Dragon Radar?",
  "What’s new with your power level?",
  "I’ll take care of the enemies on this side.",
  "Let me know what you think about this training idea.",
  "That’s interesting, I’ve never heard of that technique before.",
  "It’s nice to finally meet you, Future Trunks.",
  "Can you believe how strong Goku has become?",
  "I’m so excited for the upcoming battle!",
  "We should do this more often, Piccolo.",
  "How do you know Goku?",
  "I’m just finishing up my training in the Gravity Room.",
  "That’s a great question, let’s ask Whis.",
  "I’m not sure about that, Vegeta.",
  "I’ve been meaning to ask you about your training, Gohan.",
  "What’s your opinion on fusion?",
  "It’s good to see you again, Krillin.",
  "I’m looking forward to our next fight, Vegeta.",
  "Thanks for letting me know about the Dragon Balls!",
  "How do you like your new power level, Goten?",
  "What’s the best way to contact Shenron?",
  "I’m glad we talked about that technique, Piccolo.",
  "It’s been such a long battle.",
  "Do you have time for a quick sparring match?",
  "I’ll send you the location of the tournament.",
  "That’s exactly what I needed to hear, Goku.",
  "I hope everything is okay on Earth.",
  "I’ll catch you later at Kame House.",
  "Is this a good time to talk about strategy?",
  "I’ve been so busy training with Whis.",
  "I’m happy to help you reach Super Saiyan 3.",
  "Let’s do lunch sometime at Capsule Corp.",
  "What’s your favorite technique, Vegeta?",
  "I didn’t see that power-up coming, Frieza.",
  "I’ll keep you posted on the situation on Earth.",
  "Thanks for your time, Master Roshi.",
  "How do you feel about facing Beerus again?",
  "I think we’re on the same page about fusion.",
  "What are you up to this weekend, Goku?",
  "I’m really impressed with your training, Gohan.",
  "That makes a lot of sense, Krillin.",
  "I’ll get it done by tomorrow, Bulma.",
  "I’ll talk to you soon, Vegeta.",
  "I just got your message about the tournament.",
  "What are your thoughts on Ultra Instinct?",
  "I’m really enjoying this conversation, Whis.",
  "I’m glad you brought that up, Piccolo.",
  "What’s the latest update on the Dragon Balls?",
  "I hope you’re doing well, Master Roshi.",
  "Let’s take a break before the next battle.",
  "I appreciate your honesty, Vegeta.",
  "I was just thinking about that battle with Cell.",
  "That’s a good point, we should train harder.",
  "I’m here if you need anything, Goten.",
  "What do you want to do today, Trunks?",
  "I didn’t expect that power level from Jiren.",
  "I’m glad we’re on the same page, Gohan.",
  "How can I help you prepare for the tournament?",
  "I think that’s a great idea, Piccolo.",
  "Let me check my schedule for training.",
  "I’ll follow up with you later, Whis.",
  "Kakarot, you fool!",
  "I am the Prince of all Saiyans!",
  "Your power level is pathetic.",
  "This isn’t even my final form!",
  "You will not defeat me!",
  "Prepare yourself, this is the end!",
  "I am the strongest warrior in the universe!",
  "Feel the power of a true Saiyan!",
  "You should never underestimate a Saiyan's pride!",
  "I’ll show you the true meaning of fear!",
  "I refuse to lose to the likes of you!",
  "You’re nothing but an insect beneath my boot!",
  "This is for my fallen comrades!",
  "You won’t escape me this time!",
  "You’re too weak to stand against me!",
  "I’ll crush you with my bare hands!",
  "No one can surpass my power!",
  "Feel the wrath of a Saiyan elite!",
  "You’re about to experience true pain!",
  "Prepare for your demise!",
  "You won’t survive this!",
  "You dare challenge me?!",
  "Your time is up!",
  "I’ll make you regret this!",
  "Saiyans are a warrior race!",
  "You’ll never reach my level!",
  "Kakarot, I’ll surpass you!",
  "I am the hope of the universe!",
  "You’re not ready for this!",
  "I’ll show you my true power!",
  "Your overconfidence will be your downfall.",
  "It’s time to end this once and for all!",
  "Your defeat is inevitable.",
  "I’ll destroy everything you care about!",
  "You’ll regret crossing me!",
  "You’re finished!",
  "I’ll send you to the next dimension!",
  "Your attacks are useless!",
  "You’re no match for my strength!",
  "I’ll crush you into dust!",
  "You’re in over your head.",
  "Your power is nothing compared to mine!",
  "Feel the wrath of my final attack!",
  "You’re doomed!",
  "I’ll put an end to this now!",
  "I’m just getting started!",
  "You’re not strong enough!",
  "Your power is insignificant!",
  "You’ll never win!",
  "This is the end for you!",
  "I won’t let you win!",
  "I’ll annihilate you!",
  "You’re going down!",
  "I’ll make sure you never rise again!",
  "You don’t stand a chance!",
  "I’ll destroy you!",
  "Your defeat will be swift!",
  "You’re not worthy of my time!",
  "I’ll erase you from existence!",
  "You can’t escape my power!",
  "I’ll finish you with one blow!",
  "You’re a disgrace!",
  "You’ll pay for this!",
  "I’ll obliterate you!",
  "You’re just a stepping stone!",
  "I’ll show you true despair!",
  "You’re no match for a Saiyan!",
  "You’ll never reach my level of power!",
  "I’ll crush your spirit!",
  "Your fate is sealed!",
  "I’ll show you the power of a Super Saiyan!",
  "Your arrogance will be your undoing.",
  "I’ll defeat you with my eyes closed!",
  "You’re nothing compared to me!",
  "I’ll turn you to ashes!",
  "You’re a fool to challenge me!",
  "Your end is near!",
  "I’ll send you to oblivion!",
  "You’ll be begging for mercy!",
  "You’re in for a world of pain!",
  "I’ll make you regret this!",
  "Your strength is nothing!",
  "I’ll end this quickly!",
  "You’re finished!",
  "I’ll break you!",
  "You’re about to experience my full power!",
  "I’ll make you pay for your arrogance!",
  "Your time is up!",
  "I’ll crush your bones!",
  "You’ll never defeat me!",
  "I’ll destroy you where you stand!",
  "You’re no match for me!",
  "I’ll make you regret ever being born!",
  "You’ll never see the light of day again!",
  "I’ll break your spirit!",
  "Your defeat is inevitable!",
  "I’ll end you!",
  "You’re nothing but a speck of dust!",
  "I’ll erase you from existence!",
  "You’re a waste of space!",
  "I’ll make you disappear!",
  "You’ll wish you never crossed me!",
  "I’ll crush you under my boot!",
  "Your life ends here!",
  "You’re nothing!",
  "I’ll show you the power of a true warrior!",
  "You’ll never reach my level!",
  "I’ll make you pay for this!",
  "You’re about to be obliterated!",
  "I’ll crush you into nothing!",
  "Your power is laughable!",
  "I’ll make sure you never rise again!",
  "You’re in for a world of hurt!",
  "I’ll end this quickly!",
  "You’ll never survive this!",
  "I’ll show you true terror!",
  "Your days are numbered!",
  "I’ll make sure you never forget this!",
  "You’ll regret challenging me!",
  "I’ll destroy everything you hold dear!",
  "You’re a fool!",
  "I’ll end this now!",
  "Your fate is sealed!",
  "I’ll obliterate you!",
  "You’ll never stand a chance!",
  "I’ll crush your dreams!",
  "You’ll never defeat me!",
  "I’ll make sure you suffer!",
  "You’ll pay for your insolence!",
  "I’ll make sure you regret this!",
  "You’re no match for my power!",
  "I’ll destroy everything in my path!",
  "Your defeat is inevitable!",
  "I’ll make sure you never rise again!",
  "You’re nothing but a speck of dust!",
  "I’ll make you disappear!",
  "You’ll never survive this!",
  "I’ll break you into pieces!",
  "You’ll regret ever challenging me!",
  "I’ll crush you under my boot!",
  "You’re no match for a Saiyan!",
  "I’ll destroy you!",
  "You’ll never win this fight!",
  "I’ll make sure you pay for this!",
  "You’re nothing!",
  "I’ll obliterate you!",
  "You’ll never defeat me!",
  "I’ll make you regret this day!",
  "You’re finished!",
  "I’ll destroy you!",
  "You’ll never stand a chance!",
  "I’ll make sure you suffer!",
  "You’re nothing but a nuisance!",
  "I’ll make sure you regret this!",
  "You’ll never win!",
  "I’ll destroy you!",
  "You’re nothing but a waste of space!",
  "I’ll end this now!",
  "You’ll regret crossing me!",
  "I’ll make sure you never forget this!",
  "You’re about to experience true pain!",
  "I’ll crush you like the insect you are!",
  "You’ll never reach my level of power!",
  "I’ll make sure you pay for your arrogance!",
  "You’re no match for a Saiyan!",
  "I’ll end this quickly!",
  "You’ll regret ever being born!",
  "I’ll destroy you!",
  "You’re nothing!",
  "I’ll obliterate you!",
  "You’ll never survive this!",
  "I’ll make sure you regret this day!",
  "You’re finished!",
  "I’ll crush you under my boot!",
  "You’ll never defeat me!",
  "I’ll make sure you suffer!",
  "You’re no match for my power!",
  "I’ll destroy everything you hold dear!",
  "You’ll regret ever challenging me!",
  "I’ll end this now!",
  "You’ll never win!",
  "I’ll make sure you never rise again!",
  "You’re nothing but a speck of dust!",
  "I’ll make you disappear!",
  "You’ll never survive this!",
  "I’ll break you into pieces!",
  "You’ll regret ever crossing me!",
  "I’ll destroy you!",
  "You’re no match for a Saiyan!",
  "I’ll obliterate you!",
  "You’ll never stand a chance!",
  "I’ll make sure you suffer!",
  "You’re nothing but a waste of space!",
  "I’ll end this now!",
  "You’ll regret crossing me!",
  "I’ll make sure you never forget this!",
  "You’re about to experience true pain!",
  "I’ll crush you like the insect you are!",
  "You’ll never reach my level of power!",
  "I’ll make sure you pay for your arrogance!",
  "You’re no match for a Saiyan!",
  "I’ll end this quickly!",
  "You’ll regret ever being born!",
  "I’ll destroy you!",
  "You’re nothing!",
  "I’ll obliterate you!",
  "You’ll never survive this!",
  "I’ll make sure you regret this day!",
  "You’re finished!",
  "I’ll crush you under my boot!",
  "You’ll never defeat me!",
  "I’ll make sure you suffer!",
  "You’re no match for my power!",
  "I’ll destroy everything you hold dear!",
  "You’ll regret ever challenging me!",
  "I’ll end this now!",
  "You’ll never win!",
  "I’ll make sure you never rise again!",
  "You’re nothing but a speck of dust!",
  "I’ll make you disappear!",
  "You’ll never survive this!",
  "Hey Goku, want to grab some ramen later?",
  "Piccolo, thanks for always having my back.",
  "Krillin, you’ve really improved your techniques!",
  "Let’s train together tomorrow, Vegeta.",
  "Chi-Chi’s cooking is the best, isn’t it?",
  "Bulma, your gadgets are always so impressive!",
  "Gohan, I’m proud of the warrior you’ve become.",
  "Let’s spar again soon, Goku.",
  "Vegeta, that was a great fight today!",
  "I’m glad we’re on the same team, Piccolo.",
  "Krillin, you’re always the life of the party!",
  "Thanks for the advice, Master Roshi.",
  "Bulma, you’re a genius with all these inventions!",
  "Let’s go fishing this weekend, Goku.",
  "Gohan, you should take a break and relax.",
  "Vegeta, you’re a true rival and friend.",
  "I appreciate your guidance, Piccolo.",
  "Krillin, you always know how to make us laugh.",
  "Chi-Chi, your food is out of this world!",
  "Bulma, thanks for fixing my gear again.",
  "Goku, you’re always up for an adventure!",
  "Let’s have a barbecue this weekend.",
  "Vegeta, that was some intense training today!",
  "Piccolo, your meditation techniques are amazing.",
  "Krillin, you’ve got to teach me that move sometime.",
  "Master Roshi, your wisdom is unmatched.",
  "Bulma, you always know how to fix things.",
  "Gohan, you’re really getting stronger!",
  "Goku, you always bring out the best in everyone.",
  "Let’s watch the sunset together, guys.",
  "Vegeta, you’ve come a long way since we first met.",
  "Piccolo, thanks for being such a good mentor to Gohan.",
  "Krillin, your courage inspires us all.",
  "Chi-Chi, your house always feels like home.",
  "Bulma, your inventions always save the day.",
  "Goku, you’ve got a heart of gold.",
  "Let’s plan a camping trip together.",
  "Vegeta, I respect your dedication.",
  "Piccolo, you’ve always been a great ally.",
  "Krillin, let’s have a sparring match soon.",
  "Master Roshi, your stories are the best!",
  "Bulma, I couldn’t have done it without you.",
  "Gohan, you’re going to be a great scholar.",
  "Goku, you’re always so positive.",
  "Let’s go on an adventure together!",
  "Vegeta, you push me to be better every day.",
  "Piccolo, your training really paid off.",
  "Krillin, you’ve got such a big heart.",
  "Chi-Chi, you always keep us grounded.",
  "Bulma, you’re the smartest person I know.",
  "Goku, your fighting spirit is contagious.",
  "Let’s have a game night with everyone.",
  "Vegeta, your determination is inspiring.",
  "Piccolo, you’re more than just a warrior, you’re a friend.",
  "Krillin, you’re the bravest person I know.",
  "Master Roshi, your training methods are legendary.",
  "Bulma, you’ve saved us more times than I can count.",
  "Gohan, you’ve got a bright future ahead of you.",
  "Goku, you always know how to make people smile.",
  "Let’s have a tournament just for fun.",
  "Vegeta, you’ve got a lot of pride, and I respect that.",
  "Piccolo, your wisdom is beyond your years.",
  "Krillin, you always put others before yourself.",
  "Chi-Chi, your strength is in your kindness.",
  "Bulma, you’re the backbone of our team.",
  "Goku, you never give up, no matter what.",
  "Let’s have a picnic in the mountains.",
  "Vegeta, you’ve taught me a lot about perseverance.",
  "Piccolo, you’re always there when we need you.",
  "Krillin, you’re the best friend anyone could ask for.",
  "Master Roshi, you’ve trained some of the greatest fighters in the universe.",
  "Bulma, your inventions always save the day.",
  "Gohan, you’re a great role model for your brother.",
  "Goku, you bring out the best in everyone.",
  "Let’s have a friendly sparring match, just for fun.",
  "Vegeta, you’ve got a lot of heart.",
  "Piccolo, you’re like family to us.",
  "Krillin, you’re always looking out for everyone.",
  "Chi-Chi, your love for your family is unmatched.",
  "Bulma, you always know what to do.",
  "Goku, you’re the glue that holds us all together.",
  "Let’s have a reunion with all the Z Fighters.",
  "Vegeta, you’ve proven that you’re a true hero.",
  "Piccolo, your loyalty is something we all admire.",
  "Krillin, you’re the definition of a true friend.",
  "Master Roshi, your training has made us who we are today.",
  "Bulma, you’re the reason we always have a chance.",
  "Gohan, you’ve got the potential to surpass us all.",
  "Goku, your kindness is your greatest strength.",
  "Let’s take a trip to the Hyperbolic Time Chamber together.",
  "Vegeta, you’ve become a true leader.",
  "Piccolo, you’re the protector we all look up to.",
  "Krillin, you’re the heart of our team.",
  "Chi-Chi, you keep us all in line, and we’re grateful for it.",
  "Bulma, you’re the genius behind all our success.",
  "Goku, you’re the best of us all.",
  "Let’s celebrate our victories together.",
  "Vegeta, you’ve earned our respect and admiration.",
  "Kakarot, how’s your training going?",
  "I can't believe Frieza is back again!",
  "Did you see Gohan’s new transformation?",
  "I’m really looking forward to the next tournament.",
  "Have you tried training in the Hyperbolic Time Chamber?",
  "What are your plans for mastering Ultra Instinct?",
  "I’m so tired after that fight with Cell.",
  "That sounds like a great strategy, Vegeta!",
  "Can you send me the coordinates to King Kai’s planet?",
  "I completely agree, we need to power up more.",
  "Let's catch up after we defeat Buu!",
  "What do you think about Goku's new technique?",
  "I need a Senzu Bean break.",
  "Did you hear the legend of the Super Saiyan God?",
  "Thanks for the update on Frieza’s location!",
  "I’m really excited to face off against Jiren.",
  "Do you need any help gathering the Dragon Balls?",
  "Let me know if you sense any unusual power levels.",
  "I’ll get back to training right away.",
  "I appreciate your help, Piccolo!",
  "It was nice sparring with you, Goku!",
  "That’s exactly what I was thinking during our battle.",
  "I’ll be at Capsule Corp in 10 minutes.",
  "Do you have any recommendations for new techniques?",
  "I haven’t seen Shenron in ages!",
  "Could you repeat that move, Vegeta?",
  "I’m running a little late to Master Roshi’s training.",
  "What time works best for a sparring match?",
  "I’m so glad to hear you powered up, Gohan!",
  "How was your time on King Kai’s planet?",
  "Can we reschedule our training session?",
  "I’m heading out to train with Whis now.",
  "That’s such a coincidence, I was just thinking about training!",
  "Where should we meet for the tournament?",
  "It’s been a while since we fought together!",
  "Let’s keep in touch through King Kai’s telepathy.",
  "What a beautiful day on Planet Namek!",
  "Are you free tomorrow for a sparring session?",
  "That’s good to know, we need to prepare.",
  "I’ll see you soon, Vegeta.",
  "Did you get my message about the Dragon Radar?",
  "What’s new with your power level?",
  "I’ll take care of the enemies on this side.",
  "Let me know what you think about this training idea.",
  "That’s interesting, I’ve never heard of that technique before.",
  "It’s nice to finally meet you, Future Trunks.",
  "Can you believe how strong Goku has become?",
  "I’m so excited for the upcoming battle!",
  "We should do this more often, Piccolo.",
  "How do you know Goku?",
  "I’m just finishing up my training in the Gravity Room.",
  "That’s a great question, let’s ask Whis.",
  "I’m not sure about that, Vegeta.",
  "I’ve been meaning to ask you about your training, Gohan.",
  "What’s your opinion on fusion?",
  "It’s good to see you again, Krillin.",
  "I’m looking forward to our next fight, Vegeta.",
  "Thanks for letting me know about the Dragon Balls!",
  "How do you like your new power level, Goten?",
  "What’s the best way to contact Shenron?",
  "I’m glad we talked about that technique, Piccolo.",
  "It’s been such a long battle.",
  "Do you have time for a quick sparring match?",
  "I’ll send you the location of the tournament.",
  "That’s exactly what I needed to hear, Goku.",
  "I hope everything is okay on Earth.",
  "I’ll catch you later at Kame House.",
  "Is this a good time to talk about strategy?",
  "I’ve been so busy training with Whis.",
  "I’m happy to help you reach Super Saiyan 3.",
  "Let’s do lunch sometime at Capsule Corp.",
  "What’s your favorite technique, Vegeta?",
  "I didn’t see that power-up coming, Frieza.",
  "I’ll keep you posted on the situation on Earth.",
  "Thanks for your time, Master Roshi.",
  "How do you feel about facing Beerus again?",
  "I think we’re on the same page about fusion.",
  "What are you up to this weekend, Goku?",
  "I’m really impressed with your training, Gohan.",
  "That makes a lot of sense, Krillin.",
];


export const randomImages = [
  'https://thecozycook.com/wp-content/uploads/2023/02/Homemade-Ramen-f.jpg',
  'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/mech-frieza-cut-in-half-featured.jpg',
  'https://media.post.rvohealth.io/wp-content/uploads/2021/09/sushi-sashimi-732x549-thumbnail-732x549.jpg',
  'https://www.andy-cooks.com/cdn/shop/articles/20230826032636-andy-20cooks-20-20korean-20fried-20chicken_1181x.jpg?v=1693088250',
  'https://i.redd.it/nohjntag2a9b1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGiTn_a_ICi7KQmRBEsNZwhOHxiB3nW5Azbw&s'
]

export const generateMockMessage = (lastSenderId?: number) => {
  const randomSenderId = Math.floor(Math.random() * 3) + 2;
  const randomMessageIdx = Math.floor(Math.random() * dbzPhrases.length);
  const randomImageIdx = Math.floor(Math.random() * randomImages.length);
  const shouldShowImage = Math.floor(Math.random() * 10) > 5;
  return {
     senderId: randomSenderId,
        id: uuid(),
        text: `${dbzPhrases[randomMessageIdx]}${
          shouldShowImage
            ? ` Check out this! ${randomImages[randomImageIdx]}`
            : ""
        }`,
        timestamp: new Date(),
        isFirstMessage: lastSenderId ? (lastSenderId !== randomSenderId) : true
  }
}

export const generateMockMessages = () => dbzPhrases.map(() => generateMockMessage())