import React from "react"
import Layout from "../components/layout"

import {resourceDiv, resources, resourceTitle, acknowledgementsTitle, acknowledgements, link} from "./resources.module.css"

const ResourcesPage = () => {
    return (
      <Layout>
        <title>Useful Resources</title>
        <div className={resourceDiv}>
          <h1 className={resourceTitle}>Useful organisations</h1>
          <p className={resources}>(Twitter handles are provided but these organisations can all be found on Instagram too) </p>

          <p className={resources}><i>Botanical Society of Britain and Ireland (BSBI)</i></p>
          <a className={link} href="www.bsbi.org"><p className={resources}>www.bsbi.org</p></a>
          <p className={resources}>@BSBIbotany</p>
          <p className={resources}>The first organisation to become familiar with if you’re interested in wild plants. It’s a very friendly charity with a supportive community of botanists. Their website offers a wealth of information on plant distributions, how to become a beginner plant spotter, and how to find botanists in your local area.</p>

          <p className={resources}><i>Plantlife</i></p>
          <a className={link} href="www.plantlife.org.uk"><p className={resources}>www.plantlife.org.uk</p></a>
          <p className={resources}>@Love_plants</p>
          <p className={resources}>Plantlife is our biggest charity dedicated to conserving wild plants and suggest a great range of ways to begin botanising on their website. They offer talks, workshops and courses as well as providing toolkits for things like turning your lawn or local park into a wildflower meadow.</p>

          <p className={resources}><i>The Species Recovery Trust</i></p>
          <a className={link} href="www.speciesrecoverytrust.org.uk"><p className={resources}>www.speciesrecoverytrust.org.uk</p></a>
          <p className={resources}>@speciesrecovery</p>
          <p className={resources}>A brilliant charity working to conserve our most threatened species. They run a series of courses (including one or two taught by me!) for beginners and intermediates. Dominic Price is an excellent tutor and has taught me everything I know about grasses, and much more.</p>

          <p className={resources}><i>The Wildlife Trusts</i></p>
          <a className={link} href="www.wildlifetrusts.org"><p className={resources}>www.wildlifetrusts.org</p></a>
          <p className={resources}>@WildlifeTrusts</p>
          <p className={resources}>The Wildlife Trusts have a fantastic network of nature reserves and are useful for finding local botanical hotspots. There is plenty of information about our commonest and most intriguing wildflowers on their website.</p>

          <p className={resources}><i>The Woodland Trust</i></p>
          <a className={link} href="www.woodlandtrust.org.uk "><p className={resources}>www.woodlandtrust.org.uk </p></a>
          <p className={resources}>@WoodlandTrust</p>
          <p className={resources}>The Woodland Trust is a woodland conservation charity that protects, conserves and restores ancient woodland, as well as working to plant new ones.</p>

          <p className={resources}><i>Wildflower Hour</i></p>
          <a className={link} href="www.wildflowerhour.co.uk"><p className={resources}>www.wildflowerhour.co.uk</p></a>
          <p className={resources}>@wildflowerhour</p>
          <p className={resources}>Wildflower Hour is a social media phenomenon started by Isabel Hardman in 2015. Every Sunday evening between 8 – 9 p.m. people around the country post their favourite wildflower finds from the week using the hashtag #wildflowerhour. Visit the website to find out more.</p>

          <p className={resources}><i>British Bryological Society</i></p>
          <a className={link} href="www.ritishbryologicalsociety.org.uk"><p className={resources}>www.britishbryologicalsociety.org.uk</p></a>
          <p className={resources}>@BBSBryology</p>
          <p className={resources}>A wealth of information about mosses, liverworts and hornworts. The BBS has also published an excellent identification guide illustrated with photos.</p>

          <br/>
          <br/>

          <h1 className={resourceTitle}>Recommended Reading</h1>
          <p className={resources}><i>Plant identification guides</i></p>
          <p className={resources}>For beginners I recommend a short, photographic guide covering the commonest species to get you started. I began with <i>Collins Complete Guide to British Wild Flowers</i> by Paul Sterry which includes Ireland as well. <i>Harrap’s Wild Flowers</i> by Simon Harrap is also very good. Dominic Price’s <i>A Field Guide to Grasses, Sedges and Rushes</i> is a brilliant beginner guide for these groups, focusing on the common species you are likely to encounter. It’s illustrated with photographs of all the key features for each species and it’s written in a simple, uncomplicated style. Plus, if you buy it from The Species Recovery Trust’s website (link above), all proceeds go straight into their conservation work. I still use this book today, it’s fantastic.</p>
          <p className={resources}>Once you’ve found your feet and fancy taking the next step, I use – and wholeheartedly recommend – the <i>Collins Wild Flower Guide</i> by David Streeter which has beautiful illustrations, bite-sized keys and includes everything from ferns and horsetails to conifers and flowering plants. This one is chunkier and covers Britain, Ireland and a handful of species from northern mainland Europe. It's a visually appealing book (the illustrations are excellent) and it has served me well for thirteen years and counting. For bryophytes, <i>Mosses and Liverworts of Britain and Ireland: A Field Guide</i> produced by the British Bryological Society (BBS) is very good, as is the BBS website.</p>

          <p className={resources}><i>Plant folklore, medicinal uses and botanical history</i></p>
          <p className={resources}><i>Flora Britannica</i> by Richard Mabey is unquestionably the best book in this area. It is big, heavy, and packed full of anecdotes from people all over the country: everything you could want from such a book. Most of the local names I mentioned in the text were taken from <i>The Englishman’s Flora</i> by Geoffrey Grigson, which also provides notable folklore and references sourced from older texts for many species. Roy Vickery’s <i>Folk Flora</i> is a very good source of folklore, and don’t forget to keep an eye out for old botany books in second-hand bookshops!</p>

          <br/>
          <br/>

          <h2 className={resourceTitle}>Botanical nature writing</h2>
          <p className={resources}>There are a few botany books written in a similar style to this one, including <i>Orchid Summer</i> by Jon Dunn, <i>Chasing the Ghost</i> by Peter Marren and <i>The Orchid Hunter</i> by myself. Zoë Devlin’s lovely book <i>Blooming Marvellous</i> is about plant hunting through the year in Ireland and includes recipes, folklore and stories from her life. Richard Mabey’s <i>Weeds</i> is a little book all about our relationship with the plants we call weeds.</p>

          <br/>
          <br/>

          <h1 className={acknowledgementsTitle}>Acknowledgements</h1>
          <p className={acknowledgements}>Huge thanks to the following people for providing extra photos that I was missing: Gus Routledge, Sharon Pilkington, Ben Goldsmith, Jeremy Roberts, Lucia Stuart, Pete Stroh, Dominic Price, Kevin Walker, Tristan Norton, Lee Schofield, Jon Dunn, Sarah Watts, Dan Watson, Shaila Rao, Elizabeth Cooke, Jonathan Mitchley, Lucy Hodson, Colin French and Alex Prendergast.</p>
        </div>
      </Layout>
    )
  }

  export default ResourcesPage
