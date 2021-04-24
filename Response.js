export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - hello world",
        totalResults: "2",
        searchTerms: "hello world",
        count: 2,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "003982449146190185859:a6m0wtlvljd",
      },
    ],
  },
  context: {
    title: "Content Audience",
  },
  searchInformation: {
    searchTime: 0.302757,
    formattedSearchTime: "0.30",
    totalResults: "2",
    formattedTotalResults: "2",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "The Expert Content Research Project",
      htmlTitle: "The Expert Content Research Project",
      link: "https://contentaudience.com/research/",
      displayLink: "contentaudience.com",
      snippet:
        "... a graph database technology. And then she spent HOURS helping me get \nsome CSV data loaded in for a Hello World! using Neo4j's query language (CQL)\n.",
      htmlSnippet:
        "... a graph database technology. And then she spent HOURS helping me get \u003cbr\u003e\nsome CSV data loaded in for a \u003cb\u003eHello World\u003c/b\u003e! using Neo4j's query language (CQL)\u003cbr\u003e\n.",
      cacheId: "XbxGQAFzjEQJ",
      formattedUrl: "https://contentaudience.com/research/",
      htmlFormattedUrl: "https://contentaudience.com/research/",
      pagemap: {
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1",
            "msapplication-tileimage":
              "https://contentaudience.com/wp-content/uploads/2019/09/content-audience-favicon-8.png",
          },
        ],
        webpage: [
          {
            headline: "The Expert Content Research Project",
          },
        ],
        creativework: [
          {
            text:
              "Table Of ContentsResearch QuestionBackgroundThe traditional path for experts with audiencesIt’s clear what works is changingThree-Pronged ApproachInitial Three Question SurveyFollow Up Five...",
            headline: "The Expert Content Research Project",
          },
        ],
        wpheader: [
          {
            description: "Turn your piles of content into recurring revenue",
            headline: "Content Audience",
            url: "$150 CONSULT",
          },
        ],
        sitenavigationelement: [
          {
            name: "About",
            url: "About",
          },
        ],
        searchaction: [
          {
            "query-input": "name=s",
            target: "https://contentaudience.com/?s={s}",
          },
        ],
      },
    },
  ],
};
