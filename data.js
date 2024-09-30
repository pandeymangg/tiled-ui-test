export const dataSourceFive = {
  type: "root",
  leaves: [
    {
      type: "child",
      name: "A",
    },
    {
      type: "root", // root'
      leaves: [
        {
          type: "child",
          name: "B",
        },
        {
          type: "root", // root''
          leaves: [
            {
              type: "child",
              name: "C",
            },
            {
              type: "root", // root'''
              leaves: [
                {
                  type: "child",
                  name: "D",
                },
                {
                  type: "child",
                  name: "E",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const dataSourceTen = {
  type: "root",
  leaves: [
    {
      type: "child",
      name: "A",
    },
    {
      type: "root",
      leaves: [
        {
          type: "child",
          name: "B",
        },
        {
          type: "root",
          leaves: [
            {
              type: "child",
              name: "C",
            },
            {
              type: "root",
              leaves: [
                {
                  type: "child",
                  name: "D",
                },
                {
                  type: "root",
                  leaves: [
                    {
                      type: "child",
                      name: "E",
                    },
                    {
                      type: "root",
                      leaves: [
                        {
                          type: "child",
                          name: "F",
                        },
                        {
                          type: "root",
                          leaves: [
                            {
                              type: "child",
                              name: "G",
                            },
                            {
                              type: "root",
                              leaves: [
                                {
                                  type: "child",
                                  name: "H",
                                },
                                {
                                  type: "root",
                                  leaves: [
                                    {
                                      type: "child",
                                      name: "I",
                                    },
                                    {
                                      type: "child",
                                      name: "J",
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const dataSourceThree = {
  type: "root",
  leaves: [
    {
      type: "child",
      name: "A",
    },
    {
      type: "root",
      leaves: [
        { type: "child", name: "B" },
        { type: "child", name: "C" },
      ],
    },
  ],
};

export const dataSourceFour = {
  type: "root",
  noSplit: true,
  leaves: [
    { type: "child", name: "A" },
    {
      type: "root",
      leaves: [
        { type: "child", name: "B" },
        {
          type: "root",
          leaves: [
            { type: "child", name: "C" },
            { type: "child", name: "D" },
          ],
        },
      ],
    },
  ],
};

export const dataSourceTwo = {
  type: "root",
  leaves: [
    { type: "child", name: "A" },
    { type: "child", name: "B" },
  ],
};

export const dataSourceOne = {
  type: "root",
  leaves: [{ type: "child", name: "A" }],
};

export const dataSourceSix = {
  type: "root",
  leaves: [
    { type: "child", name: "A" },
    {
      type: "root",
      leaves: [
        { type: "child", name: "B" },
        {
          type: "root",
          leaves: [
            { type: "child", name: "C" },
            {
              type: "root",
              leaves: [
                { type: "child", name: "D" },
                {
                  type: "root",
                  leaves: [
                    { type: "child", name: "E" },
                    { type: "child", name: "F" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
