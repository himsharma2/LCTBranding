<xsl:stylesheet xmlns:x="http://www.w3.org/2001/XMLSchema" xmlns:d="http://schemas.microsoft.com/sharepoint/dsp" version="1.0" exclude-result-prefixes="xsl msxsl ddwrt" xmlns:ddwrt="http://schemas.microsoft.com/WebParts/v2/DataView/runtime" xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:SharePoint="Microsoft.SharePoint.WebControls" xmlns:ddwrt2="urn:frontpage:internal">
  <xsl:output method="html" indent="no"/>
  <xsl:decimal-format NaN=""/>
  <xsl:param name="dvt_apos">&apos;</xsl:param>
  <xsl:param name="ManualRefresh"></xsl:param>
  <xsl:variable name="dvt_1_automode">0</xsl:variable>
  <xsl:template match="/" xmlns:x="http://www.w3.org/2001/XMLSchema" xmlns:d="http://schemas.microsoft.com/sharepoint/dsp" xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" xmlns:SharePoint="Microsoft.SharePoint.WebControls">
    <xsl:choose>
      <xsl:when test="($ManualRefresh = 'True')">
        <table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td valign="top">
              <xsl:call-template name="dvt_1"/>
            </td>
            <td width="1%" class="ms-vb" valign="top">
              <img src="/_layouts/images/staticrefresh.gif" id="ManualRefresh" border="0" onclick="javascript: {ddwrt:GenFireServerEvent('__cancel')}" alt="Click here to refresh the dataview."/>
            </td>
          </tr>
        </table>
      </xsl:when>
      <xsl:otherwise>
        <xsl:call-template name="dvt_1"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="dvt_1">
    <xsl:variable name="dvt_StyleName">RepForm3</xsl:variable>
    <xsl:variable name="Rows" select="/dsQueryResponse/Rows/Row"/>
    <xsl:variable name="RowLimit" select="1" />
    <xsl:variable name="dvt_RowCount" select="count($Rows)"/>
    <xsl:variable name="IsEmpty" select="$dvt_RowCount = 0" />
    <xsl:variable name="dvt_IsEmpty" select="$dvt_RowCount = 0"/>

    <xsl:choose>
      <xsl:when test="$dvt_IsEmpty">
        <xsl:call-template name="dvt_1.empty"/>
      </xsl:when>
      <xsl:otherwise>
        <table border="0" width="100%">
          <xsl:call-template name="dvt_1.body">
            <xsl:with-param name="Rows" select="$Rows"/>
            <xsl:with-param name="FirstRow" select="1" />
            <xsl:with-param name="LastRow" select="$RowLimit" />
          </xsl:call-template>
        </table>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  <xsl:template name="dvt_1.body">
    <xsl:param name="Rows"/>
    <xsl:param name="FirstRow" />
    <xsl:param name="LastRow" />
    <xsl:for-each select="$Rows">
      <xsl:variable name="dvt_KeepItemsTogether" select="false()" />
      <xsl:variable name="dvt_HideGroupDetail" select="false()" />
      <xsl:if test="(position() &gt;= $FirstRow and position() &lt;= $LastRow) or $dvt_KeepItemsTogether">
        <xsl:if test="not($dvt_HideGroupDetail)" ddwrt:cf_ignore="1">
          <xsl:call-template name="dvt_1.rowview" >
            <xsl:with-param name="Pos" select="concat('_', position())" />
          </xsl:call-template>

        </xsl:if>
      </xsl:if>
    </xsl:for-each>
  </xsl:template>
  <xsl:template name="dvt_1.rowview">
    <xsl:param name="Pos" />
    <tr>
      <td>
        <table border="0" cellspacing="0" width="100%">
          <tr>
            <td width="20%" class="ms-vb">
              <b>Label Change ID</b>
            </td>
            <td width="80%" class="ms-vb" style="Padding-Left:15px">
              <xsl:value-of select="@Title"/>
            </td>
          </tr>
          <tr>
            <td colspan="2">

            </td>
          </tr>
          <tr>
            <td width="20%" class="ms-vb">
              <b>Reason For Change</b>
            </td>
            <td width="80%" class="ms-vb" style="Padding-Left:15px">
              <xsl:value-of select="@ReasonForChange" />
            </td>
          </tr>
          <tr>
            <td colspan="2">

            </td>
          </tr>
          <xsl:if test="normalize-space(@ReasonForChange) = 'CCDS'">
            <tr>
              <td width="20%" class="ms-vb">
                <b>CCDS Update Category</b>
              </td>
              <td width="80%" class="ms-vb" style="Padding-Left:15px">
                <xsl:value-of select="@CCDSCategory" disable-output-escaping="yes" />
              </td>
            </tr>
          </xsl:if>
          <tr>
            <td colspan="2">

            </td>

          </tr>

          <tr>
            <td width="20%" class="ms-vb">
              <b>Product</b>
            </td>
            <td id="ProductValue" width="80%" class="ms-vb" style="Padding-Left:15px">
              <xsl:value-of select="@Product" disable-output-escaping="yes" />
            </td>
          </tr>
          <tr>
            <td colspan="2"></td>
          </tr>
          <xsl:if test="normalize-space(@ReasonForChange) = 'CCDS'">
            <tr>
              <td width="20%" class="ms-vb">
                <b>CCDS Version</b>
              </td>
              <td width="80%" class="ms-vb" style="Padding-Left:15px">
                <xsl:value-of select="@CCDSVersion" />
              </td>
            </tr>
          </xsl:if>
          <tr>
            <td colspan="2">

            </td>

          </tr>
          <xsl:if test="normalize-space(@ReasonForChange) = 'CCDS'">
            <tr>
              <td width="20%" class="ms-vb">
                <b>CLRC Decision Date</b>
              </td>
              <td id="CCDSEffectiveDate" width="80%" class="ms-vb ms-vb2" style="Padding-Left:15px">
              <xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string(@CCDSEffectiveDate)"/>
			</xsl:call-template>
               <!-- <xsl:value-of select="ddwrt:FormatDateTime(string(@CCDSEffectiveDate) ,1033 ,'dd-MMM-yyyy')" />-->
              </td>
            </tr>
          </xsl:if>
          <tr>
            <td colspan="2"></td>
          </tr>
          <xsl:if test="normalize-space(@ReasonForChange) = 'CCDS'">
            <tr>
              <td width="20%" class="ms-vb">
                <b>Request Date</b>
              </td>
              <td id="RequestDate" width="80%" class="ms-vb ms-vb2" style="Padding-Left:15px">
               <xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string(@CCDSEffectiveDate)"/>
			</xsl:call-template>

               <!-- <xsl:value-of select="ddwrt:FormatDateTime(string(@CCDSEffectiveDate) ,1033 ,'dd-MMM-yyyy')" />-->
              </td>
            </tr>
          </xsl:if>
          <tr>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td width="20%" class="ms-vb">
              <b>Label Change Status</b>
            </td>
            <td width="80%" class="ms-vb" style="Padding-Left:15px">
              <xsl:value-of select="@LabelChangeStatus" />
            </td>
          </tr>
          <tr>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td width="20%" class="ms-vb">
              <b>Date Time Initiated</b>
            </td>
            <td id="DateTimeInitiated" width="80%" class="ms-vb" style="Padding-Left:15px">
                        
			<xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string(@DateTimeInitiated)"/>
			</xsl:call-template>
            </td>
          </tr>

          <tr>
            <td colspan="2"></td>
          </tr>


          <xsl:if test="not(normalize-space(@ReasonForChange) = 'CCDS')">
            <tr>
              <td width="20%" class="ms-vb">
                <b>Request Date</b>
              </td>
              <td width="80%" class="ms-vb ms-vb2" style="Padding-Left:15px">
                <nobr>
                  <xsl:call-template name="FormatDate">
			  <xsl:with-param name="DateTime" select="string(@RequestDate)"/>
			</xsl:call-template>
<!--                  <xsl:value-of select="@RequestDate" />-->
                </nobr>
              </td>
            </tr>
          </xsl:if>
          <tr>
            <td colspan="2" />
          </tr>
          <tr>
            <td width="20%" class="ms-vb">
              <b>Initiated By</b>
            </td>
            <td width="80%" class="ms-vb">
              <xsl:value-of select="@Author" disable-output-escaping="yes" />
            </td>
          </tr>
          <tr>
            <td colspan="2"></td>
          </tr>
          <tr>
            <td width="20%" class="ms-vb">
              <b>Short Description</b>
            </td>
            <td width="80%" class="ms-vb" style="Padding-Left:15px">
              <xsl:value-of select="@ShortDescription" />
            </td>
          </tr>
          <tr>
            <td colspan="2" />
          </tr>
          <tr>
            <td width="20%" class="ms-vb">
              <b>Label Change Description</b>
            </td>
            <td width="80%" class="ms-vb" style="Padding-Left:15px">
              <xsl:value-of select="@LabelingChangeDescription" disable-output-escaping="yes" />
            </td>
          </tr>
          <xsl:if test="$dvt_1_automode = '1'" ddwrt:cf_ignore="1">
            <tr>
              <td colspan="99" class="ms-vb">
                <span ddwrt:amkeyfield="ID" ddwrt:amkeyvalue="ddwrt:EscapeDelims(string(@ID))" ddwrt:ammode="view"></span>
              </td>
            </tr>
          </xsl:if>

        </table>
      </td>
    </tr>

  </xsl:template>
  <xsl:template name="dvt_1.empty">
    <xsl:variable name="dvt_ViewEmptyText">There are no items to show in this view.</xsl:variable>
    <table border="0" width="100%">
      <tr>
        <td class="ms-vb">
          <xsl:value-of select="$dvt_ViewEmptyText"/>
        </td>
      </tr>
    </table>
  </xsl:template>
<xsl:template name="FormatDate">
<!--  expected date format 1/20/2007 10:22 PM [OR] 01/20/2007 10:22 PM --> 
  <xsl:param name="DateTime" /> 
<!--  new date format 20-Jan-2007 10:22 PM--> 
<xsl:variable name="day">
  <xsl:value-of select="substring-before($DateTime,'/')" /> 
  </xsl:variable>
<xsl:variable name="mo-temp">
  <xsl:value-of select="substring-after($DateTime,'/')" /> 
  </xsl:variable>
<xsl:variable name="mo">
  <xsl:value-of select="substring-before($mo-temp,'/')" /> 
  </xsl:variable>
<xsl:variable name="year-temp">
  <xsl:value-of select="substring-after($mo-temp,'/')" /> 
  </xsl:variable>
<xsl:variable name="year">
  <xsl:value-of select="substring($year-temp,1,4)" /> 
  </xsl:variable>
<xsl:variable name="time">
  <xsl:value-of select="substring-after($DateTime,' ')" /> 
  </xsl:variable>
  <xsl:value-of select="$day" /> 
  <xsl:value-of select="'-'" /> 
<xsl:choose>
  <xsl:when test="$mo = '1' or $mo = '01'">Jan</xsl:when> 
  <xsl:when test="$mo = '2' or $mo = '02'">Feb</xsl:when> 
  <xsl:when test="$mo = '3' or $mo = '03'">Mar</xsl:when> 
  <xsl:when test="$mo = '4' or $mo = '04'">Apr</xsl:when> 
  <xsl:when test="$mo = '5' or $mo = '05'">May</xsl:when> 
  <xsl:when test="$mo = '6' or $mo = '06'">Jun</xsl:when> 
  <xsl:when test="$mo = '7' or $mo = '07'">Jul</xsl:when> 
  <xsl:when test="$mo = '8' or $mo = '08'">Aug</xsl:when> 
  <xsl:when test="$mo = '9' or $mo = '09'">Sep</xsl:when> 
  <xsl:when test="$mo = '10'">Oct</xsl:when> 
  <xsl:when test="$mo = '11'">Nov</xsl:when> 
  <xsl:when test="$mo = '12'">Dec</xsl:when> 
  </xsl:choose>
  <xsl:value-of select="'-'" /> 
  <xsl:value-of select="$year" /> 
  <xsl:value-of select="' '" /> 
  <xsl:value-of select="$time" /> 
  </xsl:template>  
  
</xsl:stylesheet>
