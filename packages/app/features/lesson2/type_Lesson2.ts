export type ContentLesson2 = {
    description: string;
    poster: string;
    video: string;
    image: string;
    header1: string;
    header2: string;
    tableBlock1: Table;
    tableBlock2: Table;
    tableBlock3: Table;
    tableBlock4: Table;
    squareText1: string;
    blockText1: { [key: string]: Exercise };
    headerBlock2: string;
    blockText2: { [key: string]: Exercise };
    headerBlock3: string;
    table2: Table;
    lifehack1: {
        title: string;
        description1: string;
        content1: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description2: string;
        content2: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description3: string;
        content3: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description4: string;
        content4: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        }
    },
    table3: Table;
    lifehack2: {
        title: string;
        description1: string;
        content1: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description2: string;
        content2: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description3: string;
        content3: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description4: string;
        content4: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        }
    },
    lifehack3: {
        title: string;
        description1: string;
        content1: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description2: string;
        content2: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description3: string;
        content3: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description4: string;
        content4: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        }
    },
    header4: string;
    squareText4: string;
    description4: string;
    test1: { example: { header: string, question: string, unswer: string};
             testContent: {[key: string]: Tests}};
    squareText6: string;
    description5: string;
    test2: { example: { header: string, question: string, unswer: string};
             testContent: {[key: string]: Tests}};
    squareText7: string;
    description6: string;
    test3: { example: { header: string, question: string, unswer: string};
             testContent: {[key: string]: Tests}};
    header5: string;
    blockText3: { [key: string]: Exercise };
    wordToTranslateBlock1: { [key: string]: Words };
    wordToTranslateBlock2: { [key: string]: Words };
    wordToTranslateBlock3: { [key: string]: Words };
    wordToTranslateBlock4: { [key: string]: Words };
    squareText5: string;
    description7: string;
    blockText4: { [key: string]: Exercise };
    description8: string;
    table4: Table;
    lifehack4: {
        title: string;
        description1: string;
        content1: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description2: string;
        content2: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description3: string;
        content3: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        },
        description4: string;
        content4: {
          1: { text: string };
          2: { text: string };
          3: { text: string }
        }
    },
    squareText8: string;
    blockText8: { [key: string]: Exercise };
}

export type Table = {
  header: string;
  rows: Row[];
};

export type Row = {
  name?: string;
  data: string[];
  spanAllColumns?: boolean;
};

export type Exercise = {
  text: string;
  example1: string;
  help1: string;
  example2: string;
  help2: string;
  example3: string;
  help3: string;
  example4: string;
  help4: string;
  example5: string;
  help5: string;
  example6: string;
  help6: string;
  example7: string;
  help7: string;
  example8: string;
  help8: string;
  example9: string;
  help9: string;
  example10: string;
  help10: string;
};

export type Tests = {
    question: string;
    unswer: string[];
    help: string;
}

export type Words = {
    text1: string;
    text2: string;
}