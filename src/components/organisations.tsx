import React, { FunctionComponent } from "react"
import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import {
  Button,
  Row,
  Col,
  Hr,
  H1,
  H3,
  H5,
} from '@bootstrap-styled/v4';

const Organisations: FunctionComponent = () => {
  const { t } = useTranslation('translations', { i18n });
  return (
    <div style={{ textAlign: 'left' }}>
      <H1 color="secondary" style={{ marginTop: '30px', marginBottom: '30px' }}>{t('organisation.title')}</H1>
      <Hr />
      <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
        <Col sm={{ size: 2 }}>
          <img alt="" src="/images/nhg.jpg" height="40" />
        </Col>
        <Col sm={{ size: 10 }}>
          <H3>Nederlands Huisartsen Genootschap</H3>
        </Col>
        <Col sm={{ size: 2 }} style={{ marginTop: '20px' }}><Button color="primary">{t('button.join')}</Button></Col>
        <Col sm={{ size: 10 }} style={{ marginTop: '20px' }}>
          <H5>{t('organisation.project')}</H5>
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }}>
          Hoe kunnen we in crisis situaties onze patienten helder en eenduidig informeren?
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }} style={{ marginTop: '20px' }}>
          <H5>{t('organisation.wants')}</H5>
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }}>
          Communicatie, programmeervaardigheden, design, projectmanagement, medische kennis
        </Col>
      </Row>
      <Hr />
      <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
        <Col sm={{ size: 2 }}>
          <img alt="" src="/images/nvic.jpg" height="40" />
        </Col>
        <Col sm={{ size: 10 }}>
          <H3>Nederlandse Vereniging voor Intensive Care</H3>
        </Col>
        <Col sm={{ size: 2 }} style={{ marginTop: '20px' }}><Button color="primary">{t('button.join')}</Button></Col>
        <Col sm={{ size: 10 }} style={{ marginTop: '20px' }}>
          <H5>{t('organisation.project')}</H5>
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }}>
          Hoe zorgen wij ervoor dat de totale beschikbare beddencapaciteit in Nederland real-time inzichtelijk is?
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }} style={{ marginTop: '20px' }}>
          <H5>{t('organisation.wants')}</H5>
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }}>
          projectmanagement, software ontwikkelaars (JAVA, Python, React JS, REST API, JSON, XML, PostgreSQL, ORACLE)
        </Col>
      </Row>

      <Hr />
      <Row style={{ marginTop: '30px', marginBottom: '30px' }}>
        <Col sm={{ size: 2 }}>
          <img alt="" src="/images/rivm.jpg" height="40" />
        </Col>
        <Col sm={{ size: 10 }}>
          <H3>Rijksinstituut voor Volksgezondheid en Milieu (RIVM)</H3>
        </Col>
        <Col sm={{ size: 2 }} style={{ marginTop: '20px' }}><Button color="primary">{t('button.join')}</Button></Col>
        <Col sm={{ size: 10 }} style={{ marginTop: '20px' }}>
          <H5>{t('organisation.project')}</H5>
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }}>
          Hoe brengen we visualiseren we voorspelde groei van de Corona uitbraak.
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }} style={{ marginTop: '20px' }}>
          <H5>{t('organisation.wants')}</H5>
        </Col>
        <Col sm={{ size: 2 }}></Col>
        <Col sm={{ size: 10 }}>
          Python, AI, machine learning, biomedical sciences
        </Col>
      </Row>
    </div >
  )
}

export default Organisations
