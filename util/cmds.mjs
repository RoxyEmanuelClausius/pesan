export default [{
    name: "apply",
    description: "Perintah setting",
    options: [
      {
        name: "delete_all",
        description: "Delete all submissions from the data and delete all the data",
        type: 'SUB_COMMAND'
      }, {
        name: "set",
        description: "Buat kiriman baru",
        type: 'SUB_COMMAND',
        options: [
          {
            name: `channel_logs`,
            channelTypes:['GUILD_TEXT'],
            description: `Select room logs`,
            required: true,
            type: "CHANNEL",
          },
          {
            name: `name`,
            description: `submission name`,
            required: true,
            type: "STRING",
          },
          {
            name: `button_name`,
            description: `Nama tombol pengiriman`,
            required: true,
            type: "STRING",
          },
          {
            name: `message_content`,
            description: `Content of a message for those who will be presented`,
            required: true,
            type: "STRING",
          },
          {
            name: `button_color`,
            description: `Jenis jawaban untuk pertanyaan pertama`,
            required: true,
            choices:[
              {
                name:`Blue`,value:"1"
              },
              {
                name:`Green`,value:"3"
              },
              {
                name:`Gray`,value:"2"
              },
              {
                name:`Red`,value:"4"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_1`,
            description: "The first question",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_1`,
            description: `Type of answer to the first question`,
            required: true,
            choices:[
              {
                name:`long answer`,value:"paragraph"
              },
              {
                name:`short answer`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_2`,
            description: "pertanyaan kedua",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_2`,
            description: `Question answer type`,
            required: true,
            choices:[
              {
                name: `long answer`,value:"paragraph"
              },
              {
                name:`short answer`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_3`,
            description: "Pertanyaan ketiga",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_3`,
            description: `Question answer type`,
            required: true,
            choices:[
              {
                name:`long answer`,value:"paragraph"
              },
              {
                name:`short answer`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_4`,
            description: "Pertanyaan keempat",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_4`,
            description: `Question answer type`,
            required: true,
            choices:[
              {
                name:`long answer`,value:"paragraph"
              },
              {
                name:`short answer`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `question_name_5`,
            description: "Pertanyaan kelima",
            required: true,
            type: "STRING",
          },
          {
            name: `question_type_5`,
            description: `Question answer type`,
            required: true,
            choices:[
              {
                name:`long answer`,value:"paragraph"
              },
              {
                name:`short answer`,value:"short"
              }
            ],
            type: "STRING",
          },
          {
            name: `image_url`,
            description: "If you have a picture, you can put the link to the picture",
            required: true,
            type: "STRING",
          }
        ]
      }]
  },
]