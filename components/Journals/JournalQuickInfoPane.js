import Panel from '../CommonElements/Panel'
import JournalIssueCover from './JournalIssueCover'

export default function JournalQuickInfoPaneComponent({ journalData = {} }) {
  return <div>
    <Panel>
      <div className="textCenter">
        <JournalIssueCover
          size="medium"
          journalIssueId={journalData.id}
          text={`Current issue of ${journalData.name}`}
        ></JournalIssueCover>
        <br />
        <a href={`/journals/${journalData.id}/current-issue`}>
          Current issue (Sep 20):<br /><i>Dummy content in publishing</i>
        </a>
      </div>
    </Panel>

    <Panel title="Bibliographic info" collapsible={true}>
      <strong>Journal name: </strong> {journalData.name}
      <br />
      <strong>Journal mnemonic: </strong> {journalData.indexing.mnemonic}
      <br />
      <strong>ISSN (Online): </strong> {journalData.indexing.issnOnline}
      <br />
      <strong>ISSN (Print): </strong> {journalData.indexing.issnPrint}
      <br />
      <strong>DOI:</strong> {journalData.indexing.doi}
      <br />
      <br />
      <strong>Frequency:</strong> 4 issues per year
      <br />
      <strong>Publishing dates:</strong> 2004-present
      <br />
      <strong>Publisher:</strong> <a className="linkExternal" target="_blank" rel="noopener" href={journalData.publisher.url}>{journalData.publisher.name}</a>
    </Panel>

    <Panel title="Information" collapsible={true}>
      <p>
        <strong>Chief Editor: </strong> Professor John Doe, Institute of Science
      </p>
      <p>
        <a className="wip" href="#">Editorial board</a>
      </p>
      <p>
        <a className="wip" href="#">Author guidelines</a>
      </p>
    </Panel>

    <Panel title="Journal title history" collapsible={true}>
      <p>
        This journal has been published under other titles in the past.
        <br />
        <br />
        <a className="wip" href="#">View this journal&apos;s title history</a>
      </p>
    </Panel>

    <Panel title="Metrics" collapsible={true}>
      <p>
        <strong>Impact Factor:</strong> 3.11
      </p>
      <p>
        <strong>Monthly article views:</strong> 93,234
      </p>
    </Panel>
  </div>;
}
