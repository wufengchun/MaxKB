export default {
  node: 'Node',
  baseComponent: 'Base Component',
  nodeSetting: 'Node Settings',
  workflow: 'Workflow',
  searchBar: {
    placeholder: 'Search by name'
  },
  info: {
    previewVersion: 'Preview Version:',
    saveTime: 'Save Time:'
  },
  setting: {
    restoreVersion: 'Restore Version',
    restoreCurrentVersion: 'Restore This Version',
    addComponent: 'Add Component',
    public: 'Publish',
    releaseHistory: 'Publish History',
    autoSave: 'Auto Save',
    latestRelease: 'Latest Publish',
    copyParam: 'Copy Parameter'
  },
  tip: {
    publicSuccess: 'Successfully',
    noData: 'No related results found',
    nameMessage: 'Name cannot be empty!',
    onlyRight: 'Only allow connections from the right anchor point',
    notRecyclable: 'Cannot create a loop connection',
    onlyLeft: 'Only allow connections to the left anchor point',
    applicationNodeError: 'This APP is unavailable',
    functionNodeError: 'This function is unavailable',
    repeatedNodeError: 'Node name already exists!',
    cannotCopy: 'Cannot be copied',
    copyError: 'Node has been copied',
    paramErrorMessage: 'Parameter already exists: '
  },
  delete: {
    confirmTitle: 'Confirm to delete this node?',
    deleteMessage: 'Node cannot be deleted'
  },
  control: {
    zoomOut: 'Zoom Out',
    zoomIn: 'Zoom In',
    fitView: 'Fit View',
    retract: 'Collapse All Nodes',
    extend: 'Expand All Nodes',
    beautify: 'One-click Beautification'
  },
  variable: {
    global: 'Global Variable',
    Referencing: 'Reference Variable',
    ReferencingRequired: 'reference variable required',
    ReferencingError: 'reference variable error',
    NoReferencing: 'Non-existent Reference Variable',
    fieldMessage: 'Please select a variable'
  },
  condition: {
    title: 'Execution Condition',
    front: 'Precondition',
    AND: 'All',
    OR: 'Any',
    text: 'After the connected node is executed, execute the current node'
  },
  validate: {
    startNodeRequired: 'Start Node Required',
    startNodeOnly: 'There can only be one start node',
    baseNodeRequired: 'Base Info Node Required',
    baseNodeOnly: 'There can only be one base info node',
    notInWorkFlowNode: 'Node not in workflow',
    noNextNode: 'Non-existent next node',
    nodeUnavailable: 'Node unavailable',
    needConnect1: 'The branch of the node needs to be connected',
    cannotEndNode: 'Node cannot be used as an end node'
  },
  nodes: {
    startNode: {
      label: 'Start',
      question: 'User Question',
      currentTime: 'Current Time'
    },
    baseNode: {
      label: 'Base Info',
      fileUpload: {
        label: 'File Upload',
        tooltip: 'When enabled, the Q&A page will display a file upload button.'
      },
      FileUploadSetting: {
        title: 'File Upload Settings',
        maxFiles: 'Maximum number of files per upload',
        fileLimit: 'Maximum size per file (MB)',
        fileUploadType: {
          label: 'File types allowed for upload',
          documentText: 'Requires "Document Content Extraction" node to parse document content',
          imageText: 'Requires "Image Understanding" node to parse image content',
          audioText: 'Requires "Speech-to-Text" node to parse audio content'
        }
      }
    },
    aiChatNode: {
      label: 'AI Chat',
      text: 'Chat with AI large model',
      answer: 'AI Answer Content',
      returnContent: {
        label: 'Return Content',
        tooltip: `If turned off, the content of this node will not be output to the user.
                  If you want the user to see the output of this node, please turn on the switch.`
      },
      defaultPrompt: 'Known Information'
    },
    searchDatasetNode: {
      label: 'Knowledge Search',
      text: 'Associate knowledge and find relevant segments',
      paragraph_list: 'List of retrieved segments',
      is_hit_handling_method_list: 'List of segments that meet direct response criteria',
      result: 'Search Result',
      directly_return: 'Content of segments that meet direct response criteria',
      selectDatasetText: 'Associated knowledge displayed here',
      searchParam: 'Search Parameters',
      searchQuestion: {
        label: 'Search Question',
        placeholder: 'Please select a search question',
        requiredMessage: 'Please select a search question'
      }
    },
    questionNode: {
      label: 'Question Optimization',
      text: 'Optimize and improve the current question based on historical chat records to better match knowledge segments',
      result: 'Optimized Question Result',
      defaultPrompt1: `Optimize and improve the user's question based on context:`,
      defaultPrompt2: `Please output an optimized question.`,
      systemDefault: 'You are a question optimization expert'
    },
    conditionNode: {
      label: 'Conditional Branch',
      text: 'Execute different nodes based on different conditions',
      branch_name: 'Branch Name',
      conditions: {
        label: 'Conditions',
        info: 'Meets the following',
        requiredMessage: 'Please select conditions'
      },
      valueMessage: 'Please enter a value',
      addCondition: 'Add Condition',
      addBranch: 'Add Branch'
    },
    replyNode: {
      label: 'Specified Reply',
      text: 'Specify reply content, referenced variables will be converted to strings for output',
      content: 'Content',
      replyContent: {
        label: 'Reply Content',
        custom: 'Custom',
        reference: 'Reference Variable'
      }
    },
    rerankerNode: {
      label: 'Multi-path Recall',
      text: 'Use Rerank to perform secondary recall on retrieval results from multiple knowledge',
      result_list: 'Re-ranked Results List',
      result: 'Re-ranking Result',
      rerankerContent: {
        label: 'Re-ranking Content',
        requiredMessage: 'Please select re-ranking content'
      },
      higher: 'Higher',
      ScoreTooltip: 'The higher the Score, the stronger the relevance.',
      max_paragraph_char_number: 'Maximum number of words to quote',
      reranker_model: {
        label: 'Rerank',
        placeholder: 'Please select a rerank'
      }
    },
    formNode: {
      label: 'Form Collection',
      text: 'Used to collect user information during Q&A process, subsequent processes can be executed based on collected form data',
      form_content_format1: 'Hello, please fill out the form below:',
      form_content_format2: 'Click the [Submit] button after filling it out.',
      form_data: 'All Form Content',
      formContent: {
        label: 'Form Output Content',
        requiredMessage:
          'Please set the output content of this node, { form } is a placeholder for the form.',
        tooltip:
          'Set the content output by executing this node, { form } is a placeholder for the form.'
      },
      formAllContent: 'All Form Content',
      formSetting: 'Form Configuration'
    },
    documentExtractNode: {
      label: 'Document Content Extraction',
      text: 'Extract content from documents',
      content: 'Document Content'
    },
    imageUnderstandNode: {
      label: 'Image Understanding',
      text: 'Identify objects, scenes, etc., in images to answer user questions',
      answer: 'AI Answer Content',
      model: {
        label: 'Vision Model',
        requiredMessage: 'Please select a vision model'
      },
      image: {
        label: 'Select Image',
        requiredMessage: 'Please select an image'
      }
    },
    imageGenerateNode: {
      label: 'Image Generation',
      text: 'Generate images based on provided text content',
      answer: 'AI Answer Content',
      model: {
        label: 'Image Generation Model',
        requiredMessage: 'Please select an image generation model'
      },
      prompt: {
        label: 'Positive Prompt',
        tooltip:
          'Positive prompt words, used to describe elements and visual features expected in the generated image'
      },
      negative_prompt: {
        label: 'Negative Prompt',
        tooltip:
          'Negative prompt words, used to describe content that should not appear in the image, which can limit the image.',
        placeholder:
          'Please describe content you do not want to generate, such as color, bloody content'
      }
    },
    speechToTextNode: {
      label: 'Speech2Text',
      text: 'Convert audio to text through speech recognition model',
      stt_model: {
        label: 'Speech Recognition Model'
      },
      audio: {
        label: 'Select Audio File',
        placeholder: 'Please select an audio file'
      }
    },
    textToSpeechNode: {
      label: 'TTS',
      text: 'Convert text to audio through speech synthesis model',
      tts_model: {
        label: 'Speech Synthesis Model'
      },
      content: {
        label: 'Select Text Content'
      }
    },
    functionNode: {
      label: 'Custom Function',
      text: 'Execute custom scripts to achieve data processing'
    },
    applicationNode: {
      label: 'APP Node'
    }
  },
  compare: {
    is_null: 'Is Null',
    is_not_null: 'Is Not Null',
    contain: 'Contains',
    not_contain: 'Does Not Contain',
    eq: 'Equals',
    ge: 'Greater Than or Equal To',
    gt: 'Greater Than',
    le: 'Less Than or Equal To',
    lt: 'Less Than',
    len_eq: 'Length Equals',
    len_ge: 'Length Greater Than or Equal To',
    len_gt: 'Length Greater Than',
    len_le: 'Length Less Than or Equal To',
    len_lt: 'Length Less Than'
  },
  FileUploadSetting: {}
}
