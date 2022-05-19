import Airtable from "airtable";

const { AIRTABLE_BASE, PROPOSAL_URL = "", SUBSCRIBE_URL = "" } = process.env;

export const getProjectsList = async context => {
  let projects = [];
  const staticProps = {
    proposalUrl: PROPOSAL_URL,
    subscribeUrl: SUBSCRIBE_URL,
  };

  if (!AIRTABLE_BASE) {
    console.error(`No Airtable base defined`);
    return { props: { projects, ...staticProps } };
  }

  try {
    const base = Airtable.base(AIRTABLE_BASE);
    const projectRecords = await base("Projects")
      .select({
        view: "Published",
      })
      .all();
    projects = projectRecords.map(i => i._rawJson);
  } catch (error) {
    console.error(error);
  }

  return { props: { projects, ...staticProps } };
};
